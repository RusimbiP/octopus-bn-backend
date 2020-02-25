export default {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      userID: '1232123232112',
      firstName: 'Octapus',
      lastName: 'Octapus',
      method: 'facebook',
      isVerified: true,
      isUpdated: true,
      email: 'octapus@andela.com',
      password: '$2a$10$JUCGXOZMZUDUHXqRpbdoVuQ.0RuEEV26NKwnZUQJ2K1tE4FwW.nE.',
      role: 'requester',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userID: '123212985492',
      firstName: 'Octapus',
      lastName: 'Octapus',
      method: 'local',
      isVerified: true,
      isUpdated: true,
      email: 'octopususer@andela.com',
      password: '$2a$10$JUCGXOZMZUDUHXqRpbdoVuQ.0RuEEV26NKwnZUQJ2K1tE4FwW.nE.',
      role: 'requester',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userID: '0e11ed8c-a1a5-4f49-a3ca-450769bfa49o',
      firstName: 'Octapuses',
      lastName: 'Jean',
      method: 'seed',
      isVerified: true,
      isUpdated: true,
      email: 'a@andela.com',
      password: '$2a$10$JUCGXOZMZUDUHXqRpbdoVuQ.0RuEEV26NKwnZUQJ2K1tE4FwW.nE.',
      role: 'requester',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userID: 'd0a051d9-447a-49a8-aebc-7e1b031afd62',
      method: 'local',
      firstName: 'Octopus',
      lastName: 'Octopus',
      email: 'octopus@andela.com',
      password: '$2a$10$JUCGXOZMZUDUHXqRpbdoVuQ.0RuEEV26NKwnZUQJ2K1tE4FwW.nE.',
      role: 'requester',
      isVerified: true,
      isUpdated: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userID: '123212965431',
      firstName: 'Rusimbi',
      lastName: 'Octapus',
      method: 'local',
      isVerified: true,
      isUpdated: true,
      email: 'rusimbipatrick@outlook.com',
      password: '$2a$10$JUCGXOZMZUDUHXqRpbdoVuQ.0RuEEV26NKwnZUQJ2K1tE4FwW.nE.',
      role: 'requester',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userID: '0e11ed8c-a1a5-4f49-a3ca-450732bfa49o',
      firstName: 'Izabayo',
      lastName: 'Blaise',
      method: 'local',
      isVerified: true,
      isUpdated: true,
      email: 'blaisefr@gmail.com',
      password: '$2a$10$JUCGXOZMZUDUHXqRpbdoVuQ.0RuEEV26NKwnZUQJ2K1tE4FwW.nE.',
      role: 'requester',
      gender: 'male',
      preferedLang: 'fr',
      birthDate: '1998-02-20',
      preferedCurrency: 'USD',
      residence: 'kimironko',
      managerEmail: 'izabayoblaise82@gmail.com',
      department: 'IT',
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fman-profile&psig=AOvVaw1-_OdOwQ-SYcfMGvGLOYb4&ust=1582456400155000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjsvNCD5ecCFQAAAAAdAAAAABAD',
      passportNumber: 'GH1234567',
      bio: 'i love eating a lot. food is bae',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userID: '000ec6c6-4884-4ca7-94b1-26a2ed842259',
      firstName: 'CYUZUZO',
      lastName: 'Emma',
      method: 'local',
      isVerified: true,
      isUpdated: true,
      email: 'manager@barefoot.com',
      password: '$2a$10$JUCGXOZMZUDUHXqRpbdoVuQ.0RuEEV26NKwnZUQJ2K1tE4FwW.nE.',
      role: 'manager',
      gender: 'male',
      preferedLang: 'fr',
      birthDate: '1995-01-01',
      preferedCurrency: 'USD',
      residence: 'Gikondo',
      department: 'IT',
      imageUrl: 'https://www.google.com/url?sa=i&url',
      passportNumber: 'GH1234560',
      bio: 'Coding is more fun!',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {})
};
