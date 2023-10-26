import { useFormik } from "formik";
import { schema } from "../schema";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  // useFormik : formik özelliklerini kullanmamızı saglayan hook
  const formik = useFormik({
    // formda tutulacak verilerin ilk değerleri
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirm_password: "",
    },
    // formun gönderilme olayında calısır
    onSubmit: async (values, actions) => {
      // api simülasyonu
      await new Promise((resolve) => setTimeout(resolve, 1900));

      // kullanıcıyı lokale gönder
      localStorage.setItem("user", JSON.stringify({ ...values, id: v4() }));

      // anasyafaya yönlendir
      navigate("/home");

      // formu temizler
      actions.resetForm();
    },
    // dogrulama seması
    validationSchema: schema,
  });

  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src="/c-logo.png" alt="logo" />
          <h2>Coinmania</h2>
        </div>

        {/* form alanı */}
        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data, key) => (
            <InputField formik={formik} data={data} key={key} />
          ))}
          <button disabled={formik.isSubmitting} type="submit">
            Kaydol
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

// ınputlar için dizi
const inputs = [
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Yaş",
    name: "age",
    type: "number",
  },
  {
    label: "Şifre",
    name: "password",
    type: "password",
  },
  {
    label: "Şifre Onay",
    name: "confirm_password",
    type: "password",
  },
];

// Input Alanı Bileşeni
const InputField = ({ formik, data }) => {
  const { label, name, type } = data;

  return (
    <div>
      <label>{label}</label>
      <input
        value={formik.values[name]}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        type={type}
      />

      {/* email ile alakalı hata varsa ekrana bas */}
      {formik.touched[name] && formik.errors[name] && (
        <span>{formik.errors[name]}</span>
      )}
    </div>
  );
};
