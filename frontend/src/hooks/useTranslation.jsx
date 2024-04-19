import { useContext } from 'react';
import TranslationContext from '../context/TranslationProvider';

const useTranslation = () => {
    return useContext(TranslationContext);
};

export default useTranslation;
