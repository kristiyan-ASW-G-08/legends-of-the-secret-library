import React, { FC } from 'react';
import { Loader, Button } from './styled';

interface FormButtonProps {
  text: string;
  loading: boolean;
}
const FormButton: FC<FormButtonProps> = ({ text, loading }) => (
  <Button type="submit">
    {loading ? <Loader /> : text}
  </Button>
);

export default FormButton;
