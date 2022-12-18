export const genres = [
  { id: "serqflsadfkjsa", name: "Action" },
  { id: "thrill", name: "Thrill" },
  { id: "sflsadfkjsa", name: "Romantic" },
];
export function getGenres(){
    return genres.filter(g=>g);
}