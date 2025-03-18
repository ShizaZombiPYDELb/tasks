import * as Yup from 'yup';

const validSchema = Yup.object({
    task: Yup.string()
        .min(5, "Мінімальна довжина - 5 символів")
        .required("Це поле обов'язкове"),
});

export {validSchema}