import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

export default function SelectChangeLanguage() {
    const [language, setLanguage] = React.useState('pt');

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleChange = (event) => {
        setLanguage(event.target.value);
        changeLanguage(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{t('selectLabel')}</InputLabel>
                <Select
                    size='small'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    label="Idioma"
                    onChange={handleChange}
                >
                    <MenuItem value="pt">
                        <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/br.png 2x`}
                            src={`https://flagcdn.com/w20/br.png`}
                            alt=""
                        />
                        {""} {t('portuguese')}
                    </MenuItem>
                    <MenuItem value="en">
                        <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/us.png 2x`}
                            src={`https://flagcdn.com/w20/us.png`}
                            alt=""
                        />
                        {""} {t('english')}
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
