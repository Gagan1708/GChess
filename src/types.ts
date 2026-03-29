export interface Move {
  from: string;
  to: string;
  san: string;
  piece: string;
  color: 'w' | 'b';
  hint: string;
  reason: string;
}

export interface Line {
  name: string;
  moves: Move[];
}

export interface Opening {
  id: string;
  name: string;
  desc: string;
  side: 'white' | 'black';
  difficulty: number;
  icon: string;
  lines: Line[];
}
