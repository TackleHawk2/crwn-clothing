import { Group, FormInputLable, Input } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLable shrink={otherProps.value.length}>
          {label}
        </FormInputLable>
      )}
    </Group>
  );
};

export default FormInput;
