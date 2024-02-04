import AbcIcon from '@mui/icons-material/Abc';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import NumbersIcon from '@mui/icons-material/Numbers';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import InfoIcon from '@mui/icons-material/Info';
import MessageIcon from '@mui/icons-material/Message';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { FIELD_TYPE } from '../../../../../../packages/fb/src/components/FormRenderer';

export const ICONS: { [fieldType: string]: JSX.Element } = {
    [FIELD_TYPE.TEXT]: <AbcIcon />,
    [FIELD_TYPE.LONG_TEXT]: <TextIncreaseIcon />,
    [FIELD_TYPE.NUMBER]: <NumbersIcon />,
    [FIELD_TYPE.BOOLEAN]: <ToggleOffIcon />,
    [FIELD_TYPE.DATE]: <CalendarMonthIcon />,
    [FIELD_TYPE.DATE_TIME]: <QueryBuilderIcon />,
    [FIELD_TYPE.DROPDOWN]: <FormatListBulletedIcon />,

    [FIELD_TYPE.FILE_UPLOAD]: <AttachFileIcon />,
    [FIELD_TYPE.OPTIONS_LIST]: <CheckBoxIcon />,
    [FIELD_TYPE.RADIO_BUTTON]: <RadioButtonCheckedIcon />,

    [FIELD_TYPE.INFO_LIST]: <InfoIcon />,
    [FIELD_TYPE.INFO_MESSAGE]: <MessageIcon />,
};
