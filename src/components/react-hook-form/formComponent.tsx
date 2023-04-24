import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

interface FormValue {
  id: string
  pw: string
}

export default function FormComponent() {
  const [submitValue, setSubmitValue] = useState<FormValue>()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>()

  const onSubmit: SubmitHandler<FormValue> = (submitData: FormValue) => {
    setSubmitValue({ id: submitData.id, pw: submitData.pw })
  }

  return (
    <>
      <div className="form-container" style={{ padding: '20px' }}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            ID <input {...register('id')} />
          </div>
          <div>
            PW{' '}
            <input
              type="password"
              {...register('pw', {
                required: true,
                minLength: {
                  value: 8,
                  message: '* 비밀번호는 8~20자리 이내로 입력해주세요.',
                },
                maxLength: {
                  value: 20,
                  message: '* 비밀번호는 8~20자리 이내로 입력해주세요.',
                },
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
                  message:
                    '* 비밀번호는 영문, 숫자, 특수문자를 혼합하여 입력해주세요.',
                },
              })}
            />
            <ErrorMessage errors={errors} name="pw" />
          </div>
          <button>submit</button>
        </Form>
      </div>
      <div style={{ padding: '20px' }}>
        submit value<div>ID : {submitValue?.id}</div>
        <div>PW : {submitValue?.pw}</div>
      </div>
    </>
  )
}
