interface PersonInterface {
  name: string,
  email: string,
  address?: string,
  photoToken?: string,
}

interface LegalEntity extends PersonInterface {
  cnpj: string,
}

interface PhysicalPerson extends PersonInterface {
  cpf: string,
}

export {
  LegalEntity,
  PhysicalPerson,
}