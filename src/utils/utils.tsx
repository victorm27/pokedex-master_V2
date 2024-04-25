export function formatPokemonName(name: string): string {
    if (name.includes("♀")) {
      return name.replace("♀", "-f");
    } else if (name.includes("♂")) {
      return name.replace("♂", "-m");
    } else if (name.includes(". ")) {
      return name.replace(". ", "-");
    } else if (name.includes("farfetch'd")) {
      return name.replace("farfetch'd", "farfetchd");
    } else return name;
  }

export function formatItemName(name: string): string {

    if (name.includes(" ")) {
      return name.replace(" ", "-");
    } else return name;
}
  
  export function waitFor(time: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  