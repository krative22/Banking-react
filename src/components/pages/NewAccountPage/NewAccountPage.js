import "./Main.css";
import React from "react";

import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accounts } from "../../../atom/accountsAtom";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";





function NewAccountPage() {
  const [uaccounts, setAccounts] = useRecoilState(accounts);
  const history = useNavigate();




  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    
    console.log(data);
    

 
  
    const accounttype = data.accounttype;
    addAccount(accounttype)

    reset();

    history(-1);


  };

  const addAccount = (accounttype) => {
    setAccounts((oldAccounts) => [
      ...oldAccounts,
      {
        name: accounttype + ": pending",
        description: "",
        summary: "",
      },
    ]);
  };




  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">
            Create Account form
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label">Name:</label>
              <input
                type="text"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Name is Required" })}
                onKeyUp={() => {
                  trigger("name");
                }}
                name="name"
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Age:</label>
              <input
                type="text"
                className={`form-control ${errors.age && "invalid"}`}
                {...register("age", {
                  required: "Age is Required",
                  min: {
                    value: 13,
                    message: "Minimum Required age is 13",
                  },
                  max: {
                    value: 65,
                    message: "Maximum allowed age is 65",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only numbers are allowed",
                  },
                })}
                onKeyUp={() => {
                  trigger("age");
                }}
              />
              {errors.age && (
                <small className="text-danger">{errors.age.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Email:</label>
              <input
                type="text"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Phone:</label>
              <input
                type="text"
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", {
                  required: "Phone is Required",
                  pattern: {
                    value:
                      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                    message: "Invalid phone no",
                  },
                })}
                onKeyUp={() => {
                  trigger("phone");
                }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Account</label>
              <select
                className="form-select"
                aria-label="select account"
                {...register("accounttype")}
              >

                <option selected value="Savings">Savings</option>
                <option value="Current">Current</option>
                <option value="Cheque">Cheque</option>
              </select>
            </div>

            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Create"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewAccountPage;