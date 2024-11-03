import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "selectLabel": "Language",
            "portuguese": "Portuguese",
            "english": "English",
            "home": {
                "title": "Transform the Future with Your Donations",
                "description": "We connect donors and NGOs to build a more sustainable and fair world. Support projects that make a difference.",
                "buttonLabel": "Discover Sustainable Projects"
            }
        }
    },
    pt: {
        translation: {
            "selectLabel": "Idioma",
            "portuguese": "Português",
            "english": "Inglês",
            "home": {
                "title": "Transforme o Futuro com Suas Doações",
                "description": "Conectamos doadores e ONGs para construir um mundo mais sustentável e justo. Apoie projetos que fazem a diferença.",
                "buttonLabel": "Descubra Projetos Sustentáveis"
            },
            "about": {
                "title": "Sobre",
                "subtitle": "O que é o GreenHub",
                "description": "O GreenHub é uma plataforma que conecta doadores conscientes a ONGs que trabalham por um futuro mais sustentável. Nosso propósito é facilitar o processo de doação e engajamento, promovendo um impacto real no desenvolvimento de projetos que fazem a diferença.",
                "list": {
                    "primary": ""
                }
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'pt',
        debug: true,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
