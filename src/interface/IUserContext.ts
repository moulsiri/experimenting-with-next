import IForm from "./IForm";
import IUserResponse from "./IUserResponse";

export default interface IUserContext {
  response: IUserResponse;
  setResponse: React.Dispatch<IUserResponse>;
  formData: IForm;
  setFormData: React.Dispatch<IForm>;
}
