import * as yup from 'yup'

export const contactFormSchema = yup.object({
  name: yup
    .string()
    .required('Jméno je povinné')
    .min(2, 'Jméno musí mít alespoň 2 znaky')
    .max(100, 'Jméno je příliš dlouhé'),
  email: yup
    .string()
    .required('Email je povinný')
    .email('Zadejte platný email'),
  phone: yup
    .string()
    .required('Telefon je povinný')
    .matches(
      /^(\+420)?[0-9]{9}$/,
      'Zadejte platné telefonní číslo (9 číslic, volitelně s předvolbou +420)'
    ),
  category: yup
    .string()
    .required('Vyberte kategorii dotazu'),
  message: yup
    .string()
    .required('Zpráva je povinná')
    .min(10, 'Zpráva musí mít alespoň 10 znaků')
    .max(1000, 'Zpráva je příliš dlouhá'),
  gdprConsent: yup
    .boolean()
    .oneOf([true], 'Musíte souhlasit se zpracováním osobních údajů')
    .required('Musíte souhlasit se zpracováním osobních údajů'),
})

export const newsletterFormSchema = yup.object({
  email: yup
    .string()
    .required('Email je povinný')
    .email('Zadejte platný email'),
  gdprConsent: yup
    .boolean()
    .oneOf([true], 'Musíte souhlasit se zpracováním osobních údajů')
    .required('Musíte souhlasit se zpracováním osobních údajů'),
})

