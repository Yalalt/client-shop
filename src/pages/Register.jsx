import style from "../styles/register.module.css";

const Register = () => {
    return (
        <div className={style.bgForm}>
            <div className={style.containerForm}>
                <div className={style.formGroup}>
                    <h1 className={style.formTitle}>Бүртгүүлэх</h1>
                    <p className={style.subTitle}>Pinecone academy</p>
                    <form>
                        <div className={style.rowGroup}>
                            <label className={style.label} for="first-name">Таны нэр</label>
                            <input
                                className={style.inputStyle}
                                type="text"
                                name="firstName"
                                id="first-name"
                            />
                        </div>
                        <div className={style.rowGroup}>
                            <label className={style.label} for="last-name">Таны овог</label>
                            <input
                                className={style.inputStyle}
                                type="text"
                                name="lastName"
                                id="last-name"
                            />
                        </div>
                        <div className={style.rowGroup}>
                            <label className={style.label} for="email">Таны и-мэйл</label>
                            <input
                                className={style.inputStyle}
                                type="email"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className={style.rowGroup}>
                            <label className={style.label} for="password">Нууц үгээ бичнэ үү</label>
                            <input
                                className={style.inputStyle}
                                type="password"
                                name="password"
                                id="password"
                            />
                        </div>
                        <div className={style.rowGroup}>
                            <label className={style.label} for="password2">Нууц үгээ давтан бичнэ үү</label>
                            <input
                                className={style.inputStyle}
                                type="password"
                                name="pasword2"
                                id="password2"
                            />
                        </div>
                        <button type="submit" className={style.registerBtn}>Бүртгүүлэх</button>
                        <p className={style.policyTerm}>
                            Бүртгүүлэх товчлуурыг дарснаар та манай <br />
                            <a href="http://localhost:3000/#" className={style.policyLink}>Гэрээний нөхцлүүд</a>-ийг
                            зөвшөөрсөн болно.
                        </p>
                    </form>
                </div>
                <footer>
                    <p className={style.footerForm}>
                        Өмнө бүртгүүлсэн бол энд дарж 
                        <a href="http://localhost:3000/login" className={style.footerFormLink}> Нэвтрэх</a>
                    </p>
                </footer>
            </div>
        </div>
    );
}
export default Register;