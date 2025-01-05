export const personaList = [
  {
    id: 1,
    src: () => import('@/assets/icon/persona/user1.svg'),
  },
  {
    id: 2,
    src: () => import('@/assets/icon/persona/user2.svg'),
  },
  {
    id: 3,
    src: () => import('@/assets/icon/persona/user3.svg'),
  },
  {
    id: 4,
    src: () => import('@/assets/icon/persona/user4.svg'),
  },
  {
    id: 5,
    src: () => import('@/assets/icon/persona/user5.svg'),
  },
  {
    id: 6,
    src: () => import('@/assets/icon/persona/user6.svg'),
  },
  {
    id: 7,
    src: () => import('@/assets/icon/persona/space1.svg'),
  },
  {
    id: 8,
    src: () => import('@/assets/icon/persona/space2.svg'),
  },
  {
    id: 9,
    src: () => import('@/assets/icon/persona/space3.svg'),
  },
  {
    id: 10,
    src: () => import('@/assets/icon/persona/space4.svg'),
  },
  {
    id: 11,
    src: () => import('@/assets/icon/persona/space5.svg'),
  },
  {
    id: 12,
    src: () => import('@/assets/icon/persona/space6.svg'),
  },
];

export function setPersona(id: number) {
  const resolvedId = id === null ? Math.floor(Math.random() * 12) + 1 : id;
  const matchedPersona = personaList.find((persona) => persona.id === resolvedId)
    || personaList.find((persona) => persona.id === 1)!;

  return matchedPersona.src();
}
