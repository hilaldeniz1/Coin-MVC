import * as yup from "yup";

// şifreyi kısıtlamak için kurallar
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

// Doğrulama şeması oluşturma:
export const schema = yup.object().shape({
  // email için zorunlulukları belirleme
  email: yup
    .string()
    .email("Lütfen geçerli bir mail giriniz")
    .required("Zorunlu Alan"),

  age: yup
    .number()
    .min(18, "18 yaşından küçükler giremez")
    .max(100, "yaşınız 100 den büyük olamaz")
    .integer("yaşınız bir tam sayı olmalı"),

  password: yup
    .string()
    .min(5, "Şifre en az 5 karakter olmalı")
    // yazı belirlediğimiz kurallarla eşleşiyo mu bakar
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Zorunlu Alan"),

  confirm_password: yup
    .string()
    //   oneOf : elemanın değeri verilen değerlerden biriyle eşeleşiyor mu kontrol eder
    .oneOf(
      // ref: farklı bir inputtan veri çağırmay yarar
      [yup.ref("password")],
      "Şifre eşleşmiyor"
    )
    .required("Zorunlu Alan"),
});
