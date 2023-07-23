import styles from './Register.module.css'

const Register = () => {
  return (
    <div className={styles.form_container}>
      <h3>Create Account</h3>
      <form className={styles.form_table}>
        
        <label className={styles.form_item}>
          <span className={styles.field_name}>name</span>
          <input type="text" name="name" id="" required />
        </label>

        <label className={styles.form_item}>
          <span className={styles.field_name}>email</span>
          <input type="text" name="email" id="" required />
        </label>

        <label className={styles.form_item}>
          <span className={styles.field_name}>password</span>
          <input type="text" name="password" id=""  required/>
        </label>

        <label className={styles.form_item}>
          <span className={styles.field_name}>confirm password</span>
          <input type="text" name="confirmPassword" id=""  required/>
        </label>

      <button className='btn-normal f-normal f-bold' type="submit">Register</button>
      </form>

  </div>
  )
}

export default Register