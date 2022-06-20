import { FormControl } from '@angular/forms';

export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const noPuedeSerStrider = (control: FormControl) => {
  const valor = control.value?.trim().toLowerCase();
  if (valor === 'strider') {
    // Si retornamos algo significa que hay un error ahi
    return {
      noStrider: true,
    };
  }
  // Si return un null en una validacion es que todo esta ok!
  return null;
};
