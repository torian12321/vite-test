import MuiExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiCircularProgress from '@mui/material/CircularProgress';
import { FIELD_TYPE } from '../../FormRenderer.constants';
import {
  InfoListHeader,
  InfoListHeaderTitle,
  InfoListItem,
  InfoListItemLabel,
  InfoListItemValue,
  loaderStyles,
} from './Fields.styles';
import type { FieldProps } from './Fields.types';
import { getFieldChoices } from './Fields.utils';

export const InfoList = ({
  type,
  name,
  label,
  loading = false,
  disabled = false,
  properties = {},
}: FieldProps): JSX.Element | null => {
  if (type !== FIELD_TYPE.INFO_LIST) return null;

  const choices = getFieldChoices(properties);

  return (
    <MuiAccordion>
      <InfoListHeader
        disabled={disabled}
        expandIcon={<MuiExpandMoreIcon />}
        aria-controls={`infolist-${name}-content`}
        id={`infolist-${name}-header`}
      >
        {loading && <MuiCircularProgress size={12} sx={loaderStyles} />}
        <InfoListHeaderTitle>{label}</InfoListHeaderTitle>
      </InfoListHeader>
      <MuiAccordionDetails>
        {choices.map((option, index: number) => (
          <InfoListItem key={index}>
            <InfoListItemLabel>{option.label}:</InfoListItemLabel>
            <InfoListItemValue>{option.value}</InfoListItemValue>
          </InfoListItem>
        ))}
      </MuiAccordionDetails>
    </MuiAccordion>
  );
};
