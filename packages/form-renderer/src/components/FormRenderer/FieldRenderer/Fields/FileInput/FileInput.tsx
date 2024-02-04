import {
  useEffect,
  useState,
  useRef,
  ChangeEvent,
  DragEvent,
  MouseEvent,
} from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteIcon from "@mui/icons-material/Delete";
import MuiBox from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import MuiHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { LoadingBar } from "../../../../LoadingBar";
import { FIELD_TYPE } from "../../../FormRenderer.constants";
import type { FieldProps, FileFieldProps } from "../Fields.types";
import {
  fileInputStyles,
  filesToUploadStyles,
  PlaceholderBox,
} from "./FileInput.styles";

export const formatFileSize = (size: number): string => {
  if (!size) return "0 Bytes";

  const KB = 1024;
  const decimals = 2;
  const sizes = ["Bytes", "KB", "MB"];
  const sizeIndex = Math.floor(Math.log(size) / Math.log(KB));

  const convertedSize = parseFloat(
    (size / Math.pow(KB, sizeIndex)).toFixed(decimals)
  );

  return `${convertedSize} ${sizes[sizeIndex]}`;
};

export const FileInput = (props: FieldProps): JSX.Element | null => {
  if (props.type !== FIELD_TYPE.FILE_UPLOAD) return null;

  return <FileInputComponent {...props} />;
};

const FileInputComponent = ({
  accept = [],
  isUploading = false,
  sizeLimit,
  isUsingIcon = true,
  placeholder = "Drop a file",
  multiple,
  onChange,
}: FieldProps & FileFieldProps): JSX.Element | null => {
  const [error, setError] = useState<string>("");
  const [errorPosition, setErrorPosition] = useState<number[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [multifile, setMultifile] = useState<FileList | File[] | null>(null);
  const [isMultiupload, setIsMultiupload] = useState<boolean>(false);
  const theme = useTheme();

  const fileInputBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isUploading) {
      // Reset field when the upload ends
      setFile(null);
      setMultifile(null);
    }
  }, [isUploading]);

  const onBoxDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (fileInputBoxRef.current) {
      fileInputBoxRef.current.style.backgroundColor =
        theme.palette.background.default;
    }
  };

  const onBoxDragLeave = (event: DragEvent<HTMLDivElement>) => {
    if (fileInputBoxRef.current) {
      if (
        (event?.relatedTarget as HTMLDivElement)?.parentNode ===
        fileInputBoxRef.current
      )
        return;
      fileInputBoxRef.current.style.backgroundColor = "";
    }
  };

  const regexCheck = /(image|application|text)\/.*$/;

  const validateFile = (fileToValidate: File | null) => {
    if (!fileToValidate) return;
    if (isUploading) return;
    if (sizeLimit && fileToValidate.size > sizeLimit) {
      setError(
        `Attachment cannot be greater than ${formatFileSize(
          sizeLimit
        )}. (${formatFileSize(fileToValidate.size)})`
      );
      setFile(fileToValidate);
      onChange(undefined);
      return;
    }
    const check = regexCheck.test(fileToValidate.type);
    if (!check) {
      setError("This field contains an invalid file type.");
      setFile(fileToValidate);
      onChange(undefined);
      return;
    }

    setFile(fileToValidate);
    onChange(fileToValidate);
  };

  const validateMultiple = (filesToValidate: FileList | undefined) => {
    if (!filesToValidate) return;
    if (isUploading) return;
    setErrorPosition([]);
    for (let i = 0; i < filesToValidate.length; ++i) {
      const fileToValidate = filesToValidate[i];
      const oldPositions = errorPosition;
      if (sizeLimit && fileToValidate.size > sizeLimit) {
        setError(
          `Attachment cannot be greater than ${formatFileSize(
            sizeLimit
          )}. (${formatFileSize(fileToValidate.size)})`
        );
        setErrorPosition(oldPositions?.concat([i]));

        setMultifile(filesToValidate);
        onChange(undefined);
        return;
      }
      const check = regexCheck.test(fileToValidate.type);
      if (!check) {
        setError("This field contains an invalid file type.");
        const newPositions = oldPositions?.concat([i]);
        setErrorPosition(newPositions);

        setMultifile(filesToValidate);
        onChange(undefined);
        return;
      }
    }
    setMultifile(filesToValidate);
    onChange(filesToValidate);
  };

  const onBoxDrop = (event: DragEvent<HTMLElement>) => {
    event.preventDefault();

    if (fileInputBoxRef.current) {
      fileInputBoxRef.current.style.backgroundColor = "";
    }
    setError("");
    setErrorPosition([]);

    if (event.dataTransfer.files.length > 1) {
      setIsMultiupload(true);
      validateMultiple(event.dataTransfer.files);
      setFile(null);
    }
    if (event.dataTransfer.files.length <= 1) {
      setIsMultiupload(false);
      setMultifile(null);
      const chosenFile = event.dataTransfer.files[0];
      validateFile(chosenFile);
    }
  };

  const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setError("");
      setErrorPosition([]);

      if (event.target.files.length > 1) {
        setIsMultiupload(true);
        validateMultiple(event.target.files);
        setFile(null);
      }
      if (event.target.files.length <= 1) {
        setIsMultiupload(false);
        setMultifile(null);
        const chosenFile = event.target.files[0];
        validateFile(chosenFile);
      }
    }
  };

  const onFileInputClick = (event: MouseEvent<HTMLInputElement>) => {
    // Clear the input field when it opens
    // To avoid memory leak
    // (invalid files can be stuck not allowing users to override)
    (event.target as HTMLInputElement).value = "";
  };

  const fileLabel = file ? `${file.name} (${formatFileSize(file.size)})` : null;

  //Remove multiupload file
  const removeFile = (fileToRemove: File, index: number) => {
    const oldMultifiles = multifile;
    if (!oldMultifiles) {
      return;
    }
    const newMultifile = Array.from(oldMultifiles).filter(
      (i) => i !== fileToRemove
    );
    const oldErrors = errorPosition;
    const newErrors = oldErrors.filter((error) => error !== index);
    if (newErrors.length <= 0) {
      setError("");
    }
    setErrorPosition(newErrors);
    setMultifile(newMultifile);
  };

  //Remove singleupload file
  const removeSingleFile = () => {
    setError("");
    onChange(undefined);
    setFile(null);
  };

  return (
    <MuiBox
      sx={fileInputStyles}
      onDragOver={onBoxDragOver}
      onDragLeave={onBoxDragLeave}
      onDrop={onBoxDrop}
      ref={fileInputBoxRef}
      role="document"
    >
      <input
        id="file-input"
        type="file"
        onChange={onFileInputChange}
        onClick={onFileInputClick}
        hidden
        accept={accept.join(", ")}
        alt="Hidden File Input"
        multiple={multiple}
      />
      <PlaceholderBox variant="body2" error={Boolean(error)}>
        {!fileLabel && (!multifile || multifile?.length <= 0)
          ? placeholder
          : ""}
      </PlaceholderBox>
      {!isUsingIcon ? (
        <MuiButton
          variant="outlined"
          component="label"
          htmlFor="file-input"
          color="info"
          size="small"
          startIcon={<AttachFileIcon color="info" />}
          disabled={isUploading}
        >
          Choose a file
        </MuiButton>
      ) : (
        <IconButton
          component="label"
          htmlFor="file-input"
          disabled={isUploading}
          size="small"
        >
          <AttachFileIcon color="info" />
        </IconButton>
      )}
      <LoadingBar show={isUploading} />
      {!!error && <MuiHelperText>{error}</MuiHelperText>}
      {multifile &&
        Array.from(multifile).map((f: File, index: number) => (
          <MuiBox
            sx={filesToUploadStyles}
            className={errorPosition?.includes(index) ? "error" : ""}
            key={f.name}
          >
            {f.name} {formatFileSize(f.size)}
            <span className="iconwrap" onClick={() => removeFile(f, index)}>
              <DeleteIcon fontSize="small" />
            </span>
          </MuiBox>
        ))}
      {fileLabel && !isMultiupload ? (
        <MuiBox
          sx={filesToUploadStyles}
          className={error !== "" ? "error" : ""}
        >
          {fileLabel}
          <span className="iconwrap" onClick={removeSingleFile}>
            <DeleteIcon fontSize="small" />
          </span>
        </MuiBox>
      ) : null}
    </MuiBox>
  );
};
