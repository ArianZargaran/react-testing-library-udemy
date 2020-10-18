import React from 'react';
import { render, screen } from '@testing-library/react';

import { CustomInput } from "./CustomInput";
import userEvent from '@testing-library/user-event';

describe('When everything is Ok', () => {
  test('should call onChange callback handler', () => {
      const onChange = jest.fn();
      render(<CustomInput value="" onChange={onChange} >Input:</CustomInput>);

      // fireEvent.change(screen.getByRole('textbox'), {
      //   target: { event: "David" }
      // });

      // expect(onChange).toHaveBeenCalledTimes(1);

      userEvent.type(screen.getByRole('textbox'), "David");

      expect(onChange).toHaveBeenCalledTimes(5);
  });
});