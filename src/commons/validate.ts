interface ObjectValidate {
  isValid: boolean;
  helperText?: string;
}

export default (
  field: string,
  min: number,
  strategy: string = "default"
): ObjectValidate | true => {
  const validateStrategyMapper = {
    default: () =>
      !field || field.length < min
        ? {
            isValid: false,
            helperText: `O campo precisa conter no mínimo ${min} caracteres`,
          }
        : true,
    phone: () =>
      !field || field.length !== min
        ? {
            isValid: false,
            helperText: `O campo telefone precusa conter ${min} caracteres`,
          }
        : true,
  };

  if (!validateStrategyMapper.hasOwnProperty(strategy)) {
    throw new Error('Estratégia de validação não encontrada');
  }

  // Precisei ignorar essa linha, pois o TS não consegue identificar todos
  // os possíveis valores da variavel "strategy"
  // @ts-ignore
  return validateStrategyMapper[strategy]();
};
