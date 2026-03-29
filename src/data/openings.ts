import { Opening } from '../types';

export const OPENINGS: Opening[] = [
  {
    id: 'italian',
    name: 'Italian Game',
    icon: '♟',
    desc: 'One of the oldest and most classical openings. Control the center and develop rapidly.',
    side: 'white',
    difficulty: 2,
    lines: [
      {
        name: 'Giuoco Piano (Main Line)',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: 'Starting the game, we move e4 to control the center and open lines for our pieces.' },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: 'Opponent moved e4 to control the center; we move e5 to mirror their move, fight for central control, and open lines for our own pieces.' },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: 'Opponent moved e5 to challenge the center; we move Nf3 to develop a piece, attack the e5 pawn, and prepare for kingside castling.' },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: 'Opponent moved Nf3 to attack e5; we move Nc6 to develop a piece and defend the e5 pawn.' },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: 'Opponent moved Nc6 to defend e5; we move Bc4 to develop the bishop to an active square, eyeing the weak f7 point.' },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: 'Opponent moved Bc4 to target f7; we move Bc5 to develop the bishop symmetrically and target the f2 square.' },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: 'Opponent moved Bc5 to target f2; we move c3 to prepare the d4 push and build a strong pawn center.' },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: 'Opponent moved c3 to prepare d4; we move Nf6 to develop a piece and counterattack the e4 pawn.' },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: 'Opponent moved Nf6 to attack e4; we move d4 to strike in the center, challenge the c5 bishop, and gain space.' },
          { san: 'exd4', from: 'e5', to: 'd4', piece: 'bP', color: 'b', hint: 'exd4', reason: 'Opponent moved d4 to challenge the center; we move exd4 to exchange pawns and relieve central tension.' },
          { san: 'cxd4', from: 'c3', to: 'd4', piece: 'wP', color: 'w', hint: 'cxd4', reason: 'Opponent moved exd4 to exchange pawns; we move cxd4 to recapture and establish a powerful pawn duo in the center.' },
          { san: 'Bb4+', from: 'c5', to: 'b4', piece: 'bB', color: 'b', hint: 'Bb4+', reason: "Opponent moved cxd4 to establish a center; we move Bb4+ to check the king and disrupt white's central plans." },
          { san: 'Bd2', from: 'c1', to: 'd2', piece: 'wB', color: 'w', hint: 'Bd2', reason: 'Opponent moved Bb4+ to check the king; we move Bd2 to block the check and challenge the active bishop.' },
          { san: 'Bxd2+', from: 'b4', to: 'd2', piece: 'bB', color: 'b', hint: 'Bxd2+', reason: 'Opponent moved Bd2 to block the check; we move Bxd2+ to exchange bishops and simplify the position.' },
          { san: 'Nbxd2', from: 'b1', to: 'd2', piece: 'wN', color: 'w', hint: 'Nbxd2', reason: 'Opponent moved Bxd2+ to exchange bishops; we move Nbxd2 to recapture and develop the queen\'s knight.' },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: 'Opponent moved Nbxd2 to develop; we move d5 to challenge the center and open lines for the light-squared bishop.' },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: 'Opponent moved d5 to challenge the center; we move exd5 to exchange pawns and maintain central pressure.' },
          { san: 'Nxd5', from: 'f6', to: 'd5', piece: 'bN', color: 'b', hint: 'Nxd5', reason: 'Opponent moved exd5 to exchange pawns; we move Nxd5 to recapture and centralize the knight.' },
          { san: 'Qb3', from: 'd1', to: 'b3', piece: 'wQ', color: 'w', hint: 'Qb3', reason: 'Opponent moved Nxd5 to centralize; we move Qb3 to pressure the d5 knight and the b7 pawn.' },
        ]
      },
      {
        name: 'Evans Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: 'Starting the game, we move e4 to control the center and open lines for our pieces.' },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: 'Opponent moved e4 to control the center; we move e5 to mirror their move, fight for central control, and open lines for our own pieces.' },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: 'Opponent moved e5 to challenge the center; we move Nf3 to develop a piece, attack the e5 pawn, and prepare for kingside castling.' },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: 'Opponent moved Nf3 to attack e5; we move Nc6 to develop a piece and defend the e5 pawn.' },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: 'Opponent moved Nc6 to defend e5; we move Bc4 to develop the bishop to an active square, eyeing the weak f7 point.' },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: 'Opponent moved Bc4 to target f7; we move Bc5 to develop the bishop symmetrically and target the f2 square.' },
          { san: 'b4', from: 'b2', to: 'b4', piece: 'wP', color: 'w', hint: 'b4', reason: 'Opponent moved Bc5 to target f2; we move b4 to offer a pawn for rapid development and to deflect the bishop from its strong diagonal.' },
          { san: 'Bxb4', from: 'c5', to: 'b4', piece: 'bB', color: 'b', hint: 'Bxb4', reason: 'Opponent moved b4 to offer a gambit; we move Bxb4 to accept the pawn and challenge white to prove their compensation.' },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: 'Opponent moved Bxb4 to accept the gambit; we move c3 to attack the bishop and prepare the d4 push to seize the center.' },
          { san: 'Ba5', from: 'b4', to: 'a5', piece: 'bB', color: 'b', hint: 'Ba5', reason: 'Opponent moved c3 to attack the bishop; we move Ba5 to retreat the bishop while maintaining pressure on the c3 pawn.' },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: 'Opponent moved Ba5 to retreat; we move d4 to strike in the center and open lines for development.' },
        ]
      },
      {
        name: 'Two Knights Defense',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: 'Starting the game, we move e4 to control the center and open lines for our pieces.' },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: 'Opponent moved e4 to control the center; we move e5 to mirror their move, fight for central control, and open lines for our own pieces.' },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: 'Opponent moved e5 to challenge the center; we move Nf3 to develop a piece, attack the e5 pawn, and prepare for kingside castling.' },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: 'Opponent moved Nf3 to attack e5; we move Nc6 to develop a piece and defend the e5 pawn.' },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: 'Opponent moved Nc6 to defend e5; we move Bc4 to develop the bishop to an active square, eyeing the weak f7 point.' },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: 'Opponent moved Bc4 to target f7; we move Nf6 to develop a piece and counterattack the e4 pawn immediately.' },
          { san: 'Ng5', from: 'f3', to: 'g5', piece: 'wN', color: 'w', hint: 'Ng5', reason: 'Opponent moved Nf6 to attack e4; we move Ng5 to attack the weak f7 square with two pieces, forcing black to respond.' },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: 'Opponent moved Ng5 to attack f7; we move d5 to block the bishop\'s diagonal and challenge white\'s center.' },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: 'Opponent moved d5 to block the diagonal; we move exd5 to capture the pawn and maintain the pressure on f7.' },
          { san: 'Na5', from: 'c6', to: 'a5', piece: 'bN', color: 'b', hint: 'Na5', reason: 'Opponent moved exd5 to capture a pawn; we move Na5 to counterattack the bishop on c4 and gain time.' },
        ]
      },
      {
        name: 'Hungarian Defense',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Be7', from: 'f8', to: 'e7', piece: 'bB', color: 'b', hint: 'Be7', reason: "Opponent moved Bc4 to pressure f7, so we move Be7 to develop the bishop solidly and prepare for castling while avoiding sharp lines." },
        ]
      },
      {
        name: 'Scotch Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Bc4 to pressure f7, so we move Nf6 to develop our knight and attack the e4 pawn, challenging White's center." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nf6 to attack e4, so we move d4 to strike at the center immediately and open lines for our pieces, offering a pawn for rapid development." },
          { san: 'exd4', from: 'e5', to: 'd4', piece: 'bP', color: 'b', hint: 'exd4', reason: "Opponent moved d4 to challenge the center, so we move exd4 to accept the gambit and remove White's central pawn." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Opponent moved exd4 to capture our pawn, so we move O-O to secure our king and bring the rook into play, prioritizing development over recapturing immediately." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "Opponent moved O-O to castle, so we move Bc5 to develop our bishop to an active square and pressure the f2 square." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "Opponent moved Bc5 to develop, so we move e5 to attack the knight on f6 and gain space in the center." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved e5 to attack our knight, so we move d5 to counter-attack White's bishop and challenge the center." },
          { san: 'exf6', from: 'e5', to: 'f6', piece: 'wP', color: 'w', hint: 'exf6', reason: "Opponent moved d5 to attack our bishop, so we move exf6 to capture the knight and create weaknesses in Black's structure." },
          { san: 'dxc4', from: 'd5', to: 'c4', piece: 'bP', color: 'b', hint: 'dxc4', reason: "Opponent moved exf6 to capture our knight, so we move dxc4 to capture White's bishop and maintain material balance." },
          { san: 'Re1+', from: 'f1', to: 'e1', piece: 'wR', color: 'w', hint: 'Re1+', reason: "Opponent moved dxc4 to capture our bishop, so we move Re1+ to check the king and take control of the open e-file." },
        ]
      },
      {
        name: 'Max Lange Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Bc4 to pressure f7, so we move Nf6 to develop our knight and attack the e4 pawn, challenging White's center." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nf6 to attack e4, so we move d4 to strike at the center immediately and open lines for our pieces." },
          { san: 'exd4', from: 'e5', to: 'd4', piece: 'bP', color: 'b', hint: 'exd4', reason: "Opponent moved d4 to challenge the center, so we move exd4 to capture the pawn and remove White's central presence." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Opponent moved exd4 to capture our pawn, so we move O-O to secure our king and bring the rook into play, prioritizing development." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "Opponent moved O-O to castle, so we move Bc5 to develop our bishop to an active square and pressure the f2 square." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "Opponent moved Bc5 to develop, so we move e5 to initiate the Max Lange Attack, putting immediate pressure on the knight and creating tactical complications." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved e5 to attack our knight, so we move d5 to counter-attack White's bishop and challenge the center." },
          { san: 'exf6', from: 'e5', to: 'f6', piece: 'wP', color: 'w', hint: 'exf6', reason: "Opponent moved d5 to attack our bishop, so we move exf6 to capture the knight and create weaknesses in Black's structure." },
          { san: 'dxc4', from: 'd5', to: 'c4', piece: 'bP', color: 'b', hint: 'dxc4', reason: "Opponent moved exf6 to capture our knight, so we move dxc4 to capture White's bishop and maintain material balance." },
          { san: 'Re1+', from: 'f1', to: 'e1', piece: 'wR', color: 'w', hint: 'Re1+', reason: "Opponent moved dxc4 to capture our bishop, so we move Re1+ to check the king and take control of the open e-file." },
        ]
      },
      {
        name: 'Giuoco Pianissimo',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "Opponent moved Bc4 to pressure f7, so we move Bc5 to develop our bishop to an active square and pressure the f2 square." },
          { san: 'd3', from: 'd2', to: 'd3', piece: 'wP', color: 'w', hint: 'd3', reason: "Opponent moved Bc5 to develop, so we move d3 to play solidly, avoiding immediate central clashes and preparing for a slow build-up." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d3 to solidify, so we move Nf6 to develop our knight and prepare for castling." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "Opponent moved Nf6 to develop, so we move c3 to prepare a future d4 or b4 push while controlling the d4 square." },
        ]
      },
      {
        name: 'Two Knights Defense: Polerio Defense',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Bc4 to pressure f7, so we move Nf6 to develop our knight and attack the e4 pawn, challenging White's center." },
          { san: 'Ng5', from: 'f3', to: 'g5', piece: 'wN', color: 'w', hint: 'Ng5', reason: "Opponent moved Nf6 to attack e4, so we move Ng5 to attack the weak f7 square, initiating the Fried Liver setup." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Ng5 to attack f7, so we move d5 to block the bishop's diagonal and challenge White's center." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to block our bishop, so we move exd5 to capture the pawn and maintain pressure on the center." },
          { san: 'Na5', from: 'c6', to: 'a5', piece: 'bN', color: 'b', hint: 'Na5', reason: "Opponent moved exd5 to capture our pawn, so we move Na5 to counter-attack White's bishop on c4, initiating the Polerio Defense." },
          { san: 'Bb5+', from: 'c4', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5+', reason: "Opponent moved Na5 to attack our bishop, so we move Bb5+ to check the king and maintain our initiative." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved Bb5+ to check our king, so we move c6 to block the check and challenge the bishop." },
          { san: 'dxc6', from: 'd5', to: 'c6', piece: 'wP', color: 'w', hint: 'dxc6', reason: "Opponent moved c6 to block our check, so we move dxc6 to capture the pawn and maintain our material advantage." },
          { san: 'bxc6', from: 'b7', to: 'c6', piece: 'bP', color: 'b', hint: 'bxc6', reason: "Opponent moved dxc6 to capture our pawn, so we move bxc6 to recapture and maintain a strong pawn center, sacrificing a pawn for initiative." },
        ]
      },
      {
        name: 'Fried Liver Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Bc4 to pressure f7, so we move Nf6 to develop our knight and attack the e4 pawn, challenging White's center." },
          { san: 'Ng5', from: 'f3', to: 'g5', piece: 'wN', color: 'w', hint: 'Ng5', reason: "Opponent moved Nf6 to attack e4, so we move Ng5 to attack the weak f7 square, initiating the Fried Liver setup." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Ng5 to attack f7, so we move d5 to block the bishop's diagonal and challenge White's center." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to block our bishop, so we move exd5 to capture the pawn and maintain pressure on the center." },
          { san: 'Nxd5', from: 'c6', to: 'd5', piece: 'bN', color: 'b', hint: 'Nxd5', reason: "Opponent moved exd5 to capture our pawn, so we move Nxd5 to recapture the pawn, which allows White to initiate the Fried Liver sacrifice." },
          { san: 'Nxf7', from: 'g5', to: 'f7', piece: 'wN', color: 'w', hint: 'Nxf7', reason: "Opponent moved Nxd5 to recapture, so we move Nxf7 to sacrifice the knight and expose the black king to a powerful attack." },
          { san: 'Kxf7', from: 'e8', to: 'f7', piece: 'bK', color: 'b', hint: 'Kxf7', reason: "Opponent moved Nxf7 to sacrifice their knight, so we move Kxf7 to accept the sacrifice, though it leaves our king exposed." },
          { san: 'Qf3+', from: 'd1', to: 'f3', piece: 'wQ', color: 'w', hint: 'Qf3+', reason: "Opponent moved Kxf7 to capture our knight, so we move Qf3+ to check the king and put immediate pressure on the pinned knight on d5." },
        ]
      },
      {
        name: 'Traxler Counterattack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Bc4 to pressure f7, so we move Nf6 to develop our knight and attack the e4 pawn, challenging White's center." },
          { san: 'Ng5', from: 'f3', to: 'g5', piece: 'wN', color: 'w', hint: 'Ng5', reason: "Opponent moved Nf6 to attack e4, so we move Ng5 to attack the weak f7 square, initiating the Fried Liver setup." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "Opponent moved Ng5 to attack f7, so we move Bc5 to ignore the threat and counter-attack White's weak f2 square, initiating the Traxler Counterattack." },
          { san: 'Nxf7', from: 'g5', to: 'f7', piece: 'wN', color: 'w', hint: 'Nxf7', reason: "Opponent moved Bc5 to counter-attack f2, so we move Nxf7 to take the bait and attack the rook and queen, though it allows a dangerous counter-attack." },
          { san: 'Bxf2+', from: 'c5', to: 'f2', piece: 'bB', color: 'b', hint: 'Bxf2+', reason: "Opponent moved Nxf7 to attack our major pieces, so we move Bxf2+ to sacrifice the bishop and initiate a massive attack against the white king." },
        ]
      },
      {
        name: 'Jerome Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "Opponent moved Bc4 to pressure f7, so we move Bc5 to develop our bishop to an active square and pressure the f2 square." },
          { san: 'Bxf7+', from: 'c4', to: 'f7', piece: 'wB', color: 'w', hint: 'Bxf7+', reason: "Opponent moved Bc5 to develop, so we move Bxf7+ to initiate the Jerome Gambit, sacrificing the bishop to draw the king out and create immediate chaos." },
          { san: 'Kxf7', from: 'e8', to: 'f7', piece: 'bK', color: 'b', hint: 'Kxf7', reason: "Opponent moved Bxf7+ to sacrifice their bishop, so we move Kxf7 to accept the sacrifice, though it forces our king into the open." },
          { san: 'Nxe5+', from: 'f3', to: 'e5', piece: 'wN', color: 'w', hint: 'Nxe5+', reason: "Opponent moved Kxf7 to capture our bishop, so we move Nxe5+ to continue the sacrifice and keep the black king under pressure." },
          { san: 'Nxe5', from: 'c6', to: 'e5', piece: 'bN', color: 'b', hint: 'Nxe5', reason: "Opponent moved Nxe5+ to sacrifice their knight, so we move Nxe5 to accept the material, though White's attack continues." },
          { san: 'Qh5+', from: 'd1', to: 'h5', piece: 'wQ', color: 'w', hint: 'Qh5+', reason: "Opponent moved Nxe5 to capture our knight, so we move Qh5+ to check the king and aim for a quick checkmate or decisive advantage." },
        ]
      },
      {
        name: 'Blackburne Shilling Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Nd4', from: 'c6', to: 'd4', piece: 'bN', color: 'b', hint: 'Nd4', reason: "Opponent moved Bc4 to pressure f7, so we move Nd4 to initiate the Blackburne Shilling Gambit, offering the e5 pawn as a trap to lure White into a dangerous position." },
          { san: 'Nxe5', from: 'f3', to: 'e5', piece: 'wN', color: 'w', hint: 'Nxe5', reason: "Opponent moved Nd4 to offer a pawn, so we move Nxe5 to accept the material, though it falls into Black's trap." },
          { san: 'Qg5', from: 'd8', to: 'g5', piece: 'bQ', color: 'b', hint: 'Qg5', reason: "Opponent moved Nxe5 to capture our pawn, so we move Qg5 to attack the knight on e5 and the weak g2 pawn, exploiting White's greed." },
        ]
      },
      {
        name: 'Evans Gambit Declined',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "Opponent moved Bc4 to pressure f7, so we move Bc5 to develop our bishop to an active square and pressure the f2 square." },
          { san: 'b4', from: 'b2', to: 'b4', piece: 'wP', color: 'w', hint: 'b4', reason: "Opponent moved Bc5 to develop, so we move b4 to initiate the Evans Gambit, offering a pawn to gain time and control the center." },
          { san: 'Bb6', from: 'c5', to: 'b6', piece: 'bB', color: 'b', hint: 'Bb6', reason: "Opponent moved b4 to offer a pawn, so we move Bb6 to decline the gambit and keep our bishop on a strong diagonal while avoiding the complications of accepting." },
        ]
      },
      {
        name: 'Deutz Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Bc4 to pressure f7, so we move Nf6 to develop our knight and attack the e4 pawn, challenging White's center." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Opponent moved Nf6 to attack e4, so we move O-O to secure our king and prioritize development over defending the pawn immediately." },
          { san: 'Nxe4', from: 'f6', to: 'e4', piece: 'bN', color: 'b', hint: 'Nxe4', reason: "Opponent moved O-O to castle, so we move Nxe4 to capture the unprotected e4 pawn and challenge White's center." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nxe4 to capture our pawn, so we move d4 to initiate the Deutz Gambit, striking in the center and opening lines for our pieces." },
        ]
      },
      {
        name: 'Rousseau Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'f5', from: 'f7', to: 'f5', piece: 'bP', color: 'b', hint: 'f5', reason: "Opponent moved Bc4 to pressure f7, so we move f5 to initiate the Rousseau Gambit, an aggressive counter-gambit challenging White's center and opening the f-file." },
        ]
      },
      {
        name: 'Paris Defense',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved Bc4 to pressure f7, so we move d6 to initiate the Paris Defense, a solid classical approach that defends e5 and prepares for development." },
        ]
      },
      {
        name: 'Greco Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "Opponent moved Bc4 to pressure f7, so we move Bc5 to develop our bishop to an active square and pressure the f2 square." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "Opponent moved Bc5 to develop, so we move c3 to prepare a strong center with d4." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved c3 to prepare d4, so we move Nf6 to develop our knight and attack the e4 pawn." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nf6 to attack e4, so we move d4 to strike at the center and challenge Black's bishop." },
          { san: 'exd4', from: 'e5', to: 'd4', piece: 'bP', color: 'b', hint: 'exd4', reason: "Opponent moved d4 to challenge the center, so we move exd4 to capture the pawn and remove White's central presence." },
          { san: 'cxd4', from: 'c3', to: 'd4', piece: 'wP', color: 'w', hint: 'cxd4', reason: "Opponent moved exd4 to capture our pawn, so we move cxd4 to recapture and maintain a strong pawn center." },
          { san: 'Bb4+', from: 'c5', to: 'b4', piece: 'bB', color: 'b', hint: 'Bb4+', reason: "Opponent moved cxd4 to recapture, so we move Bb4+ to check the king and gain time for development." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Bb4+ to check our king, so we move Nc3 to initiate the Greco Gambit, offering the e4 pawn for a rapid attack and development." },
        ]
      },
      {
        name: 'Two Knights: Fritz Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Bc4 to pressure f7, so we move Nf6 to develop our knight and attack the e4 pawn, challenging White's center." },
          { san: 'Ng5', from: 'f3', to: 'g5', piece: 'wN', color: 'w', hint: 'Ng5', reason: "Opponent moved Nf6 to attack e4, so we move Ng5 to attack the weak f7 square, initiating the Fried Liver setup." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Ng5 to attack f7, so we move d5 to block the bishop's diagonal and challenge White's center." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to block our bishop, so we move exd5 to capture the pawn and maintain pressure on the center." },
          { san: 'Nd4', from: 'c6', to: 'd4', piece: 'bN', color: 'b', hint: 'Nd4', reason: "Opponent moved exd5 to capture our pawn, so we move Nd4 to initiate the Fritz Variation, counter-attacking immediately with the knight and creating complications." },
        ]
      },
      {
        name: 'Two Knights: Ulvestad Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Bc4 to pressure f7, so we move Nf6 to develop our knight and attack the e4 pawn, challenging White's center." },
          { san: 'Ng5', from: 'f3', to: 'g5', piece: 'wN', color: 'w', hint: 'Ng5', reason: "Opponent moved Nf6 to attack e4, so we move Ng5 to attack the weak f7 square, initiating the Fried Liver setup." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Ng5 to attack f7, so we move d5 to block the bishop's diagonal and challenge White's center." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to block our bishop, so we move exd5 to capture the pawn and maintain pressure on the center." },
          { san: 'b5', from: 'b7', to: 'b5', piece: 'bP', color: 'b', hint: 'b5', reason: "Opponent moved exd5 to capture our pawn, so we move b5 to initiate the Ulvestad Variation, counter-gambiting with the b-pawn to distract White and gain initiative." },
        ]
      },
      {
        name: 'Canal-Sokolsky Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "Opponent moved Bc4 to pressure f7, so we move Bc5 to develop our bishop to an active square and pressure the f2 square." },
          { san: 'd3', from: 'd2', to: 'd3', piece: 'wP', color: 'w', hint: 'd3', reason: "Opponent moved Bc5 to develop, so we move d3 to play solidly and prepare for a slow build-up." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d3 to solidify, so we move Nf6 to develop our knight and prepare for castling." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Nf6 to develop, so we move Nc3 to initiate the Canal-Sokolsky Attack, developing the knight early to c3 and maintaining a flexible position." },
        ]
      },
      {
        name: 'Italian Four Knights',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Bc4 to pressure f7, so we move Nf6 to develop our knight and attack the e4 pawn, challenging White's center." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Nf6 to attack e4, so we move Nc3 to initiate the Italian Four Knights, developing our last minor piece and maintaining a solid symmetrical position." },
        ]
      },
      {
        name: 'Møller Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "Opponent moved Bc4 to pressure f7, so we move Bc5 to develop our bishop to an active square and pressure the f2 square." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "Opponent moved Bc5 to develop, so we move c3 to prepare for the d4 push and build a strong center." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved c3 to prepare d4, so we move Nf6 to develop our knight and attack the e4 pawn." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nf6 to attack e4, so we move d4 to challenge the center immediately and open lines for our pieces." },
          { san: 'exd4', from: 'e5', to: 'd4', piece: 'bP', color: 'b', hint: 'exd4', reason: "Opponent moved d4 to challenge the center, so we move exd4 to capture the pawn and maintain our share of the center." },
          { san: 'cxd4', from: 'c3', to: 'd4', piece: 'wP', color: 'w', hint: 'cxd4', reason: "Opponent moved exd4 to capture, so we move cxd4 to recapture and maintain a strong central pawn pair." },
          { san: 'Bb4+', from: 'c5', to: 'b4', piece: 'bB', color: 'b', hint: 'Bb4+', reason: "Opponent moved cxd4 to recapture, so we move Bb4+ to develop with check and challenge White's center control." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Bb4+ to check, so we move Nc3 to block the check and initiate the Møller Attack, offering a pawn for rapid development and attacking chances." },
          { san: 'Nxe4', from: 'f6', to: 'e4', piece: 'bN', color: 'b', hint: 'Nxe4', reason: "Opponent moved Nc3 to block the check, so we move Nxe4 to capture the central pawn and challenge White's development." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Opponent moved Nxe4 to capture a pawn, so we move O-O to safeguard our king and prepare for central pressure." },
          { san: 'Bxc3', from: 'b4', to: 'c3', piece: 'bB', color: 'b', hint: 'Bxc3', reason: "Opponent moved O-O to castle, so we move Bxc3 to trade our bishop for the knight and disrupt White's pawn structure." },
          { san: 'd5', from: 'd4', to: 'd5', piece: 'wP', color: 'w', hint: 'd5', reason: "Opponent moved Bxc3 to trade, so we move d5 to push forward and create complications, maintaining the initiative in the Møller Attack." },
        ]
      },
      {
        name: 'Koltanowski Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "Opponent moved Bc4 to pressure f7, so we move Bc5 to develop our bishop to an active square and pressure the f2 square." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Opponent moved Bc5 to develop, so we move O-O to safeguard our king and bring the rook into play." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved O-O to castle, so we move Nf6 to develop our knight and prepare for our own castling." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nf6 to develop, so we move d4 to initiate the Koltanowski Gambit, sacrificing a pawn to open lines and gain a lead in development." },
        ]
      },
      {
        name: 'Evans Gambit: Pierce Defense',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "Opponent moved Bc4 to pressure f7, so we move Bc5 to develop our bishop to an active square and pressure the f2 square." },
          { san: 'b4', from: 'b2', to: 'b4', piece: 'wP', color: 'w', hint: 'b4', reason: "Opponent moved Bc5 to develop, so we move b4 to initiate the Evans Gambit, sacrificing a pawn to distract Black's bishop and gain time for central expansion." },
          { san: 'Bb6', from: 'c5', to: 'b6', piece: 'bB', color: 'b', hint: 'Bb6', reason: "Opponent moved b4 to gambit, so we move Bb6 to decline the gambit and maintain the bishop on a strong diagonal." },
          { san: 'a4', from: 'a2', to: 'a4', piece: 'wP', color: 'w', hint: 'a4', reason: "Opponent moved Bb6 to decline, so we move a4 to initiate the Pierce Defense, gaining space on the queenside and threatening to trap the bishop." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "Opponent moved a4 to threaten our bishop, so we move a6 to provide a retreat square and prevent a5." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved a6 to defend, so we move Nc3 to develop our knight and maintain pressure on the center." },
        ]
      },
      {
        name: 'Evans Gambit: Tartakower Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "Opponent moved Bc4 to pressure f7, so we move Bc5 to develop our bishop to an active square and pressure the f2 square." },
          { san: 'b4', from: 'b2', to: 'b4', piece: 'wP', color: 'w', hint: 'b4', reason: "Opponent moved Bc5 to develop, so we move b4 to initiate the Evans Gambit, sacrificing a pawn to distract Black's bishop and gain time for central expansion." },
          { san: 'Bxb4', from: 'c5', to: 'b4', piece: 'bB', color: 'b', hint: 'Bxb4', reason: "Opponent moved b4 to gambit, so we move Bxb4 to accept the gambit and challenge White's compensation." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "Opponent moved Bxb4 to accept, so we move c3 to attack the bishop and prepare for the d4 push." },
          { san: 'Ba5', from: 'b4', to: 'a5', piece: 'bB', color: 'b', hint: 'Ba5', reason: "Opponent moved c3 to attack our bishop, so we move Ba5 to retreat the bishop while maintaining pressure on the c3 pawn." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Ba5 to retreat, so we move d4 to strike in the center and open lines for development." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved d4 to challenge the center, so we move d6 to solidify our position and support the e5 pawn." },
          { san: 'Qb3', from: 'd1', to: 'b3', piece: 'wQ', color: 'w', hint: 'Qb3', reason: "Opponent moved d6 to solidify, so we move Qb3 to initiate the Tartakower Attack, pressuring the weak f7 square immediately." },
        ]
      },
      {
        name: 'Two Knights: Modern Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Bc4 to pressure f7, so we move Nf6 to develop our knight and attack the e4 pawn, challenging White's center." },
          { san: 'd3', from: 'd2', to: 'd3', piece: 'wP', color: 'w', hint: 'd3', reason: "Opponent moved Nf6 to attack e4, so we move d3 to initiate the Modern Variation, playing solidly and avoiding the sharp tactical lines of Ng5." },
        ]
      },
      {
        name: 'Two Knights: Steinitz Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Bc4 to pressure f7, so we move Nf6 to develop our knight and attack the e4 pawn, challenging White's center." },
          { san: 'Ng5', from: 'f3', to: 'g5', piece: 'wN', color: 'w', hint: 'Ng5', reason: "Opponent moved Nf6 to attack e4, so we move Ng5 to attack the weak f7 square, initiating the Fried Liver setup." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Ng5 to attack f7, so we move d5 to block the bishop's diagonal and challenge White's center." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to block our bishop, so we move exd5 to capture the pawn and maintain pressure on the center." },
          { san: 'Na5', from: 'c6', to: 'a5', piece: 'bN', color: 'b', hint: 'Na5', reason: "Opponent moved exd5 to capture, so we move Na5 to counterattack the bishop and challenge White's control." },
          { san: 'Bb5+', from: 'c4', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5+', reason: "Opponent moved Na5 to attack our bishop, so we move Bb5+ to check the king and maintain our initiative." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved Bb5+ to check, so we move c6 to block the check and challenge White's bishop." },
          { san: 'dxc6', from: 'd5', to: 'c6', piece: 'wP', color: 'w', hint: 'dxc6', reason: "Opponent moved c6 to block, so we move dxc6 to capture the pawn and maintain our material advantage." },
          { san: 'bxc6', from: 'b7', to: 'c6', piece: 'bP', color: 'b', hint: 'bxc6', reason: "Opponent moved dxc6 to capture, so we move bxc6 to recapture and maintain our central presence." },
          { san: 'Be2', from: 'b5', to: 'e2', piece: 'wB', color: 'w', hint: 'Be2', reason: "Opponent moved bxc6 to recapture, so we move Be2 to retreat the bishop to a safe square while maintaining its influence." },
          { san: 'h6', from: 'h7', to: 'h6', piece: 'bP', color: 'b', hint: 'h6', reason: "Opponent moved Be2 to retreat, so we move h6 to kick the knight from its aggressive post on g5." },
          { san: 'Nh3', from: 'g5', to: 'h3', piece: 'wN', color: 'w', hint: 'Nh3', reason: "Opponent moved h6 to kick our knight, so we move Nh3 to initiate the Steinitz Variation, retreating the knight to the edge to prepare for future maneuvers." },
        ]
      },
      {
        name: 'Two Knights: Perreux Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Bc4 to pressure f7, so we move Nf6 to develop our knight and attack the e4 pawn, challenging White's center." },
          { san: 'Ng5', from: 'f3', to: 'g5', piece: 'wN', color: 'w', hint: 'Ng5', reason: "Opponent moved Nf6 to attack e4, so we move Ng5 to attack the weak f7 square, initiating the Fried Liver setup." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Ng5 to attack f7, so we move d5 to block the bishop's diagonal and challenge White's center." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to block our bishop, so we move exd5 to capture the pawn and maintain pressure on the center." },
          { san: 'Na5', from: 'c6', to: 'a5', piece: 'bN', color: 'b', hint: 'Na5', reason: "Opponent moved exd5 to capture, so we move Na5 to counterattack the bishop and challenge White's control." },
          { san: 'Bb5+', from: 'c4', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5+', reason: "Opponent moved Na5 to attack our bishop, so we move Bb5+ to check the king and maintain our initiative." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved Bb5+ to check, so we move c6 to block the check and challenge White's bishop." },
          { san: 'dxc6', from: 'd5', to: 'c6', piece: 'wP', color: 'w', hint: 'dxc6', reason: "Opponent moved c6 to block, so we move dxc6 to capture the pawn and maintain our material advantage." },
          { san: 'bxc6', from: 'b7', to: 'c6', piece: 'bP', color: 'b', hint: 'bxc6', reason: "Opponent moved dxc6 to capture, so we move bxc6 to recapture and maintain our central presence." },
          { san: 'Qf3', from: 'd1', to: 'f3', piece: 'wQ', color: 'w', hint: 'Qf3', reason: "Opponent moved bxc6 to recapture, so we move Qf3 to initiate the Perreux Variation, developing the queen to f3 and pinning the c6 pawn to maintain pressure." },
        ]
      },
      {
        name: 'Italian Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our pieces." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to attack that pawn and develop our knight to its most active square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack our e5 pawn, so we move Nc6 to defend the pawn and develop our knight toward the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nc6 to defend e5, so we move Bc4 to develop our bishop to an active diagonal, eyeing the weak f7 square." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "Opponent moved Bc4 to pressure f7, so we move Bc5 to develop our bishop to an active square and pressure the f2 square." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Bc5 to develop, so we move d4 to initiate the Italian Gambit, sacrificing a pawn to open lines and gain a lead in development." },
        ]
      }
    ]
  },
  {
    id: 'sicilian',
    name: 'Sicilian Defense',
    icon: '🏰',
    desc: 'The most popular response to 1.e4. Fight for the center asymmetrically with counterplay.',
    side: 'black',
    difficulty: 3,
    lines: [
      {
        name: 'Najdorf Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens with e4." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "The Sicilian! Fight for d4 asymmetrically." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "White develops." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: 'Prepare to develop and support e5 later.' },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "White opens the center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: 'Capture the d4 pawn! Gain the half-open c-file.' },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "White recaptures." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: 'Develop and attack e4.' },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "White develops." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "The Najdorf move! Subtly prevents Bb5+ and prepares b5." },
        ]
      },
      {
        name: 'Dragon Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare d4." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange pawns." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Develop and attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "The Dragon! Prepare to fianchetto the bishop on g7 for a powerful diagonal." },
        ]
      },
      {
        name: 'Sveshnikov Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "The Sveshnikov! Black kicks the knight and claims space, accepting a hole on d5." },
        ]
      },
      {
        name: 'Classical Sicilian',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare development." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "The Classical! Black develops both knights naturally before committing the a-pawn." },
        ]
      },
      {
        name: 'Scheveningen Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare center." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "The Scheveningen! Black creates a solid 'small center' with d6 and e6." },
        ]
      },
      {
        name: 'Taimanov Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "The Taimanov! Flexible and solid development." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend and develop." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "Prepare b5 and prevent Nb5." },
        ]
      },
      {
        name: 'Kan Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Prepare development." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "The Kan! Extremely flexible, preventing Nb5 and preparing development." },
        ]
      },
      {
        name: 'Richter-Rauzer Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare development." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Classical development." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "The Richter-Rauzer! White immediately pins the knight and prepares queenside castling." },
        ]
      },
      {
        name: 'Rossolimo Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "The Rossolimo! Avoid main line theory and pressure the knight." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Prepare to fianchetto." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Castle early." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Fianchetto bishop." },
        ]
      },
      {
        name: 'Alapin Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "The Alapin! White prepares d4 to build a solid pawn center." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Black counterattacks e4 immediately." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "White kicks the knight." },
          { san: 'Nd5', from: 'f6', to: 'd5', piece: 'bN', color: 'b', hint: 'Nd5', reason: "Knight takes a central post." },
        ]
      },
      {
        name: 'Closed Sicilian',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "The Closed Sicilian! White avoids opening the center with d4." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Black develops." },
          { san: 'g3', from: 'g2', to: 'g3', piece: 'wP', color: 'w', hint: 'g3', reason: "White prepares to fianchetto." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Black also prepares to fianchetto." },
          { san: 'Bg2', from: 'f1', to: 'g2', piece: 'wB', color: 'w', hint: 'Bg2', reason: "Fianchetto bishop." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Fianchetto bishop." },
        ]
      },
      {
        name: 'Accelerated Dragon',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "The Accelerated Dragon! Black prepares to fianchetto without playing d6 first." },
        ]
      },
      {
        name: 'Grand Prix Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'f4', from: 'f2', to: 'f4', piece: 'wP', color: 'w', hint: 'f4', reason: "The Grand Prix! White prepares a kingside attack with f4." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Prepare to fianchetto." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Fianchetto bishop." },
        ]
      },
      {
        name: 'Smith-Morra Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Strike in the center!" },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Black captures." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "The Smith-Morra Gambit! Offer a second pawn for rapid development." },
          { san: 'dxc3', from: 'd4', to: 'c3', piece: 'bP', color: 'b', hint: 'dxc3', reason: "Black accepts." },
          { san: 'Nxc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nxc3', reason: "White develops with tempo." },
        ]
      },
      {
        name: 'Moscow Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare development." },
          { san: 'Bb5+', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5+', reason: "The Moscow! White checks immediately to simplify the position." },
          { san: 'Bd7', from: 'c8', to: 'd7', piece: 'bB', color: 'b', hint: 'Bd7', reason: "Black blocks with the bishop." },
          { san: 'Bxd7+', from: 'b5', to: 'd7', piece: 'wB', color: 'w', hint: 'Bxd7+', reason: "White trades bishops." },
          { san: 'Qxd7', from: 'd8', to: 'd7', piece: 'bQ', color: 'b', hint: 'Qxd7', reason: "Black recaptures with the queen." },
        ]
      },
      {
        name: 'Kalashnikov Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "The Kalashnikov! Similar to Sveshnikov but without Nf6 first." },
          { san: 'Nb5', from: 'd4', to: 'b5', piece: 'wN', color: 'w', hint: 'Nb5', reason: "White targets d6." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Defend d6." },
        ]
      },
      {
        name: 'Wing Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'b4', from: 'b2', to: 'b4', piece: 'wP', color: 'w', hint: 'b4', reason: "The Wing Gambit! Offer a pawn to deflect the c5-pawn and gain center control." },
          { san: 'cxb4', from: 'c5', to: 'b4', piece: 'bP', color: 'b', hint: 'cxb4', reason: "Black accepts." },
          { san: 'a3', from: 'a2', to: 'a3', piece: 'wP', color: 'w', hint: 'a3', reason: "White offers another pawn for development." },
        ]
      },
      {
        name: 'Four Knights Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Prepare d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "The Four Knights! Both sides develop all knights early." },
        ]
      },
      {
        name: 'Pin Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Prepare d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'Bb4', from: 'f8', to: 'b4', piece: 'bB', color: 'b', hint: 'Bb4', reason: "The Pin Variation! Black pins the knight on c3 to pressure e4." },
        ]
      },
      {
        name: 'Kupreichik Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare development." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'Bd7', from: 'c8', to: 'd7', piece: 'bB', color: 'b', hint: 'Bd7', reason: "The Kupreichik! An unusual but solid development of the light-squared bishop." },
        ]
      },
      {
        name: 'Boleslavsky Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "The Boleslavsky! Black prepares e5, accepting a backward d6 pawn for central space." },
        ]
      },
      {
        name: 'Chekhover Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare development." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Qxd4', from: 'd1', to: 'd4', piece: 'wQ', color: 'w', hint: 'Qxd4', reason: "The Chekhover! White recaptures with the queen, aiming for rapid development." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Black attacks the queen immediately." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "White pins the knight." },
        ]
      },
      {
        name: "O'Kelly Variation",
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "The O'Kelly! Black prevents Bb5 and waits for White to commit." },
        ]
      },
      {
        name: 'Nimzowitsch Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "The Nimzowitsch! Black counterattacks e4 immediately, similar to Alekhine's Defense." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "White kicks the knight." },
          { san: 'Nd5', from: 'f6', to: 'd5', piece: 'bN', color: 'b', hint: 'Nd5', reason: "Knight takes a central post." },
        ]
      },
      {
        name: 'Hyper-Accelerated Dragon',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "The Hyper-Accelerated Dragon! Black fianchettoes immediately, avoiding some lines of the main Dragon." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "White strikes in the center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Qxd4', from: 'd1', to: 'd4', piece: 'wQ', color: 'w', hint: 'Qxd4', reason: "White recaptures with the queen." },
        ]
      },
      {
        name: 'Snyder Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'b3', from: 'b2', to: 'b3', piece: 'wP', color: 'w', hint: 'b3', reason: "The Snyder Variation! White prepares to fianchetto the queen's bishop." },
        ]
      },
      {
        name: 'Bowdler Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "The Bowdler Attack! White develops the bishop to c4, eyeing f7." },
        ]
      },
      {
        name: 'Kopec System',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare development." },
          { san: 'Bd3', from: 'f1', to: 'd3', piece: 'wB', color: 'w', hint: 'Bd3', reason: "The Kopec System! An unusual placement for the bishop, preparing c3 and d4." },
        ]
      },
      {
        name: 'Mengarini Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'a3', from: 'a2', to: 'a3', piece: 'wP', color: 'w', hint: 'a3', reason: "The Mengarini Variation! White prepares b4 and waits for Black's response." },
        ]
      },
      {
        name: 'Quinteros Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Qc7', from: 'd8', to: 'c7', piece: 'bQ', color: 'b', hint: 'Qc7', reason: "The Quinteros Variation! Black develops the queen early to c7." },
        ]
      },
      {
        name: 'Rubinstein Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Rossolimo setup." },
          { san: 'Nd4', from: 'c6', to: 'd4', piece: 'bN', color: 'b', hint: 'Nd4', reason: "The Rubinstein! Black counterattacks the bishop immediately." },
        ]
      },
      {
        name: 'Dragon Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare d6." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open Sicilian." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Capture." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "The Dragon! Preparing to fianchetto the bishop." },
        ]
      },
      {
        name: 'Najdorf Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare d6." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open Sicilian." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Capture." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "The Najdorf! Controlling b5 and preparing ...e5 or ...e6." },
        ]
      },
      {
        name: 'Scheveningen Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare d6." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open Sicilian." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Capture." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "The Scheveningen! Creating a solid small center." },
        ]
      },
      {
        name: 'Taimanov Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open Sicilian." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Capture." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "The Taimanov! Flexible development." },
        ]
      },
      {
        name: 'Kan Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Early e6." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open Sicilian." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Capture." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "The Kan! Very flexible and solid." },
        ]
      },
      {
        name: 'Richter-Rauzer Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare d6." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open Sicilian." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Capture." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "The Richter-Rauzer! Aggressive development." },
        ]
      },
      {
        name: 'Sozin Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare d6." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open Sicilian." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Capture." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "The Sozin! Targeting f7." },
        ]
      },
      {
        name: 'Grand Prix Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Closed Sicilian setup." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'f4', from: 'f2', to: 'f4', piece: 'wP', color: 'w', hint: 'f4', reason: "The Grand Prix Attack! Preparing a kingside onslaught." },
        ]
      },
      {
        name: 'Alapin Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "The Alapin! Preparing d4 to build a strong center." },
        ]
      },
      {
        name: 'Smith-Morra Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "The Smith-Morra! Offering a pawn for rapid development." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Black accepts." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "White offers another pawn." },
        ]
      },
      {
        name: 'Rossolimo Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "The Rossolimo! Avoiding the Open Sicilian main lines." },
        ]
      },
      {
        name: 'Moscow Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare d6." },
          { san: 'Bb5+', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5+', reason: "The Moscow Variation! Checking the king and simplifying." },
        ]
      },
      {
        name: 'Sveshnikov Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open Sicilian." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Capture." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "The Sveshnikov! Challenging the knight and taking space." },
        ]
      },
      {
        name: 'Kalashnikov Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open Sicilian." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Capture." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "The Kalashnikov! Similar to Sveshnikov but without Nf6." },
        ]
      },
      {
        name: 'Accelerated Dragon',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open Sicilian." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Capture." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "The Accelerated Dragon! Preparing to fianchetto without d6." },
        ]
      },
      {
        name: 'Morra Gambit Accepted',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Smith-Morra Gambit." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Black accepts." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "White offers another pawn." },
          { san: 'dxc3', from: 'd4', to: 'c3', piece: 'bP', color: 'b', hint: 'dxc3', reason: "Black accepts the second pawn." },
          { san: 'Nxc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nxc3', reason: "White recaptures, gaining rapid development." },
        ]
      },
      {
        name: 'Smith-Morra Declined',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Smith-Morra Gambit." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Black accepts." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "White offers another pawn." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Black declines the gambit with a central counter-strike." },
        ]
      },
      {
        name: 'Delayed Alapin',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "The Delayed Alapin! Transposing to Alapin structures." },
        ]
      },
      {
        name: 'Steinitz Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Hyper-Accelerated Dragon." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Fianchetto bishop." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "The Steinitz (Maroczy Bind)! White builds a powerful bind on d5." },
        ]
      },
      {
        name: 'Paulsen Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "The Paulsen! Black prepares development and center control." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "Prevent Bb5." },
        ]
      },
      {
        name: 'Grivas Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Qb6', from: 'd8', to: 'b6', piece: 'bQ', color: 'b', hint: 'Qb6', reason: "The Grivas Variation! Black pressures the knight on d4 immediately." },
        ]
      },
      {
        name: 'Magnus Smith Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare development." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Defend e4." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Dragon setup." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "The Magnus Smith! White develops the bishop to c4 in the Dragon." },
        ]
      },
      {
        name: 'Prins Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Prepare development." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Open center." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Exchange." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Recapture." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Attack e4." },
          { san: 'f3', from: 'f2', to: 'f3', piece: 'wP', color: 'w', hint: 'f3', reason: "The Prins Variation! White solidifies e4 and prepares g4." },
        ]
      },
      {
        name: 'Old Sicilian',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "The Old Sicilian! White develops the knight to c3 before Nf3." },
        ]
      },
      {
        name: 'Smith-Morra Gambit: Siberian Trap',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Smith-Morra Gambit." },
          { san: 'cxd4', from: 'c5', to: 'd4', piece: 'bP', color: 'b', hint: 'cxd4', reason: "Black accepts." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "White offers another pawn." },
          { san: 'dxc3', from: 'd4', to: 'c3', piece: 'bP', color: 'b', hint: 'dxc3', reason: "Black accepts." },
          { san: 'Nxc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nxc3', reason: "White recaptures." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Prepare development." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Develop bishop." },
          { san: 'Qc7', from: 'd8', to: 'c7', piece: 'bQ', color: 'b', hint: 'Qc7', reason: "The Siberian Trap setup! Black prepares ...Nf6 and ...Ng4." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "White castles." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Develop knight." },
          { san: 'Qe2', from: 'd1', to: 'e2', piece: 'wQ', color: 'w', hint: 'Qe2', reason: "White develops the queen, falling into the trap." },
          { san: 'Ng4', from: 'f6', to: 'g4', piece: 'bN', color: 'b', hint: 'Ng4', reason: "Black executes the trap! Threatening ...Nd4 and ...Qh2#." },
        ]
      },
      {
        name: 'Lasker-Dunne Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'g3', from: 'g2', to: 'g3', piece: 'wP', color: 'w', hint: 'g3', reason: "The Lasker-Dunne! White prepares a kingside fianchetto." },
        ]
      },
      {
        name: 'Grand Prix Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'f4', from: 'f2', to: 'f4', piece: 'wP', color: 'w', hint: 'f4', reason: "The Grand Prix Attack! White prepares a kingside attack with f4." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Black develops." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Black prepares to fianchetto." },
        ]
      },
      {
        name: 'Alapin Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Sicilian Defense." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "The Alapin! White prepares d4 to create a strong pawn center." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Black counterattacks e4." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "White gains space." },
          { san: 'Nd5', from: 'f6', to: 'd5', piece: 'bN', color: 'b', hint: 'Nd5', reason: "Knight takes a central post." },
        ]
      }
    ]
  },
  {
    id: 'queens-gambit',
    name: "Queen's Gambit",
    icon: '👑',
    desc: 'Classic 1.d4 opening. Offer a pawn to seize the center. A staple of championship chess.',
    side: 'white',
    difficulty: 2,
    lines: [
      {
        name: 'QGD - Orthodox Defense',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d5 to control the center, so we move c4 to initiate the Queen's Gambit, challenging the d5 pawn and offering a pawn for central control." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved c4 to gambit, so we move e6 to decline the gambit and reinforce our d5 pawn while opening lines for the dark-squared bishop." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved e6 to solidify, so we move Nc3 to develop our knight and increase pressure on the d5 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nc3 to pressure d5, so we move Nf6 to develop our knight and defend the d5 pawn." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved Nf6 to develop, so we move Bg5 to pin the knight to the queen and increase pressure on Black's position." },
          { san: 'Be7', from: 'f8', to: 'e7', piece: 'bB', color: 'b', hint: 'Be7', reason: "Opponent moved Bg5 to pin our knight, so we move Be7 to develop our bishop and unpin the knight." },
          { san: 'e3', from: 'e2', to: 'e3', piece: 'wP', color: 'w', hint: 'e3', reason: "Opponent moved Be7 to unpin, so we move e3 to solidify our center and open lines for the light-squared bishop." },
          { san: 'O-O', from: 'e8', to: 'g8', piece: 'bK', color: 'b', hint: 'O-O', reason: "Opponent moved e3 to solidify, so we move O-O to safeguard our king and bring the rook into play." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved O-O to castle, so we move Nf3 to develop our last minor piece and prepare for further central action." },
        ]
      },
      {
        name: "Queen's Gambit Accepted",
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d5 to control the center, so we move c4 to initiate the Queen's Gambit, challenging the d5 pawn and offering a pawn for central control." },
          { san: 'dxc4', from: 'd5', to: 'c4', piece: 'bP', color: 'b', hint: 'dxc4', reason: "Opponent moved c4 to gambit, so we move dxc4 to accept the gambit, challenging White to prove their compensation while we gain a pawn." },
          { san: 'e3', from: 'e2', to: 'e3', piece: 'wP', color: 'w', hint: 'e3', reason: "Opponent moved dxc4 to accept, so we move e3 to prepare to recapture the pawn with our bishop and solidify our center." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved e3 to prepare recapture, so we move Nf6 to develop our knight and prepare for castling." },
          { san: 'Bxc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bxc4', reason: "Opponent moved Nf6 to develop, so we move Bxc4 to recapture the pawn and develop our bishop to an active square." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved Bxc4 to recapture, so we move e6 to solidify our position and prepare for further development." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e6 to solidify, so we move Nf3 to develop our knight and maintain control over the center." },
        ]
      },
      {
        name: 'Slav Defense',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d5 to control the center, so we move c4 to initiate the Queen's Gambit, challenging the d5 pawn and offering a pawn for central control." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved c4 to gambit, so we move c6 to initiate the Slav Defense, supporting d5 with the c-pawn and keeping the light-squared bishop's path open." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved c6 to solidify, so we move Nf3 to develop our knight and maintain pressure on the center." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nf3 to develop, so we move Nf6 to develop our knight and prepare for castling." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Nf6 to develop, so we move Nc3 to develop our last minor piece and increase pressure on the d5 square." },
          { san: 'dxc4', from: 'd5', to: 'c4', piece: 'bP', color: 'b', hint: 'dxc4', reason: "Opponent moved Nc3 to pressure, so we move dxc4 to capture the pawn and force White to prove their compensation." },
          { san: 'a4', from: 'a2', to: 'a4', piece: 'wP', color: 'w', hint: 'a4', reason: "Opponent moved dxc4 to capture, so we move a4 to prevent Black's b5 expansion and maintain control over the queenside." },
        ]
      },
      {
        name: 'Chigorin Defense',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d5 to control the center, so we move c4 to initiate the Queen's Gambit, challenging the d5 pawn and offering a pawn for central control." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved c4 to gambit, so we move Nc6 to initiate the Chigorin Defense, developing the knight to an active square and putting immediate pressure on d4." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved Nc6 to pressure d4, so we move Nf3 to develop our knight and defend the d4 pawn." },
          { san: 'Bg4', from: 'c8', to: 'g4', piece: 'bB', color: 'b', hint: 'Bg4', reason: "Opponent moved Nf3 to defend, so we move Bg4 to pin the knight and maintain pressure on White's center." },
        ]
      },
      {
        name: 'Albin Countergambit',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d5 to control the center, so we move c4 to initiate the Queen's Gambit, challenging the d5 pawn and offering a pawn for central control." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved c4 to gambit, so we move e5 to initiate the Albin Countergambit, striking back immediately and sacrificing a pawn for central space and initiative." },
          { san: 'dxe5', from: 'd4', to: 'e5', piece: 'wP', color: 'w', hint: 'dxe5', reason: "Opponent moved e5 to countergambit, so we move dxe5 to accept the pawn and challenge Black to prove their compensation." },
          { san: 'd4', from: 'd5', to: 'd4', piece: 'bP', color: 'b', hint: 'd4', reason: "Opponent moved dxe5 to accept, so we move d4 to push our pawn forward, creating a central wedge and restricting White's development." },
        ]
      },
      {
        name: 'Semi-Slav Defense',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d5 to control the center, so we move c4 to initiate the Queen's Gambit, challenging the d5 pawn and offering a pawn for central control." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved c4 to gambit, so we move c6 to support our d5 pawn and keep the light-squared bishop's path open, preparing for a Slav setup." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved c6 to solidify, so we move Nf3 to develop our knight and maintain pressure on the center." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nf3 to develop, so we move Nf6 to develop our knight and prepare for castling." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Nf6 to develop, so we move Nc3 to develop our last minor piece and increase pressure on the d5 square." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved Nc3 to pressure, so we move e6 to initiate the Semi-Slav Defense, combining Slav and QGD ideas for a very solid structure." },
        ]
      },
      {
        name: 'Tarrasch Defense',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d5 to control the center, so we move c4 to initiate the Queen's Gambit, challenging the d5 pawn and offering a pawn for central control." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved c4 to gambit, so we move e6 to decline the gambit and reinforce our d5 pawn while opening lines for the dark-squared bishop." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved e6 to solidify, so we move Nc3 to develop our knight and increase pressure on the d5 square." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Opponent moved Nc3 to pressure, so we move c5 to initiate the Tarrasch Defense, immediately challenging the center with the c-pawn." },
        ]
      },
      {
        name: 'Cambridge Springs Defense',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d5 to control the center, so we move c4 to initiate the Queen's Gambit, challenging the d5 pawn and offering a pawn for central control." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved c4 to gambit, so we move e6 to decline the gambit and reinforce our d5 pawn while opening lines for the dark-squared bishop." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved e6 to solidify, so we move Nc3 to develop our knight and increase pressure on the d5 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nc3 to pressure d5, so we move Nf6 to develop our knight and defend the d5 pawn." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved Nf6 to develop, so we move Bg5 to pin the knight and increase pressure on Black's position." },
          { san: 'Nbd7', from: 'b8', to: 'd7', piece: 'bN', color: 'b', hint: 'Nbd7', reason: "Opponent moved Bg5 to pin, so we move Nbd7 to develop our knight and prepare for further central action." },
          { san: 'e3', from: 'e2', to: 'e3', piece: 'wP', color: 'w', hint: 'e3', reason: "Opponent moved Nbd7 to develop, so we move e3 to solidify our center and open lines for the light-squared bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e3 to solidify, so we move c6 to prepare for the Qa5 expansion and solidify our pawn structure." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved c6 to prepare, so we move Nf3 to develop our knight and maintain central control." },
          { san: 'Qa5', from: 'd8', to: 'a5', piece: 'bQ', color: 'b', hint: 'Qa5', reason: "Opponent moved Nf3 to develop, so we move Qa5 to initiate the Cambridge Springs Defense, counter-pinning the knight on c3 and creating tactical threats." },
        ]
      },
      {
        name: 'Exchange Variation (QGD)',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d5 to control the center, so we move c4 to initiate the Queen's Gambit, challenging the d5 pawn and offering a pawn for central control." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved c4 to gambit, so we move e6 to decline the gambit and reinforce our d5 pawn while opening lines for the dark-squared bishop." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved e6 to solidify, so we move Nc3 to develop our knight and increase pressure on the d5 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nc3 to pressure d5, so we move Nf6 to develop our knight and defend the d5 pawn." },
          { san: 'cxd5', from: 'c4', to: 'd5', piece: 'wP', color: 'w', hint: 'cxd5', reason: "Opponent moved Nf6 to develop, so we move cxd5 to initiate the Exchange Variation, clarifying the central structure and creating a more open game." },
          { san: 'exd5', from: 'e6', to: 'd5', piece: 'bP', color: 'b', hint: 'exd5', reason: "Opponent moved cxd5 to exchange, so we move exd5 to recapture the pawn and maintain our central presence." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved exd5 to recapture, so we move Bg5 to pin the knight and increase pressure on Black's position." },
        ]
      },
      {
        name: 'Lasker Defense',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d5 to control the center, so we move c4 to initiate the Queen's Gambit, challenging the d5 pawn and offering a pawn for central control." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved c4 to gambit, so we move e6 to decline the gambit and reinforce our d5 pawn while opening lines for the dark-squared bishop." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved e6 to solidify, so we move Nc3 to develop our knight and increase pressure on the d5 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nc3 to pressure d5, so we move Nf6 to develop our knight and defend the d5 pawn." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved Nf6 to develop, so we move Bg5 to pin the knight and increase pressure on Black's position." },
          { san: 'Be7', from: 'f8', to: 'e7', piece: 'bB', color: 'b', hint: 'Be7', reason: "Opponent moved Bg5 to pin, so we move Be7 to develop our bishop and unpin the knight." },
          { san: 'e3', from: 'e2', to: 'e3', piece: 'wP', color: 'w', hint: 'e3', reason: "Opponent moved Be7 to unpin, so we move e3 to solidify our center and open lines for the light-squared bishop." },
          { san: 'O-O', from: 'e8', to: 'g8', piece: 'bK', color: 'b', hint: 'O-O', reason: "Opponent moved e3 to solidify, so we move O-O to safeguard our king and bring the rook into play." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved O-O to castle, so we move Nf3 to develop our knight and maintain central control." },
          { san: 'h6', from: 'h7', to: 'h6', piece: 'bP', color: 'b', hint: 'h6', reason: "Opponent moved Nf3 to develop, so we move h6 to challenge the bishop and ask it to declare its intentions." },
          { san: 'Bh4', from: 'g5', to: 'h4', piece: 'wB', color: 'w', hint: 'Bh4', reason: "Opponent moved h6 to challenge, so we move Bh4 to retreat the bishop while maintaining the pin on the knight." },
          { san: 'Ne4', from: 'f6', to: 'e4', piece: 'bN', color: 'b', hint: 'Ne4', reason: "Opponent moved Bh4 to retreat, so we move Ne4 to initiate the Lasker Defense, simplifying the position by trading pieces and challenging White's center." },
        ]
      },
      {
        name: 'Tartakower Defense',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d5 to control the center, so we move c4 to initiate the Queen's Gambit, challenging the d5 pawn and offering a pawn for central control." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved c4 to gambit, so we move e6 to decline the gambit and reinforce our d5 pawn while opening lines for the dark-squared bishop." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved e6 to solidify, so we move Nc3 to develop our knight and increase pressure on the d5 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nc3 to pressure d5, so we move Nf6 to develop our knight and defend the d5 pawn." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved Nf6 to develop, so we move Bg5 to pin the knight and increase pressure on Black's position." },
          { san: 'Be7', from: 'f8', to: 'e7', piece: 'bB', color: 'b', hint: 'Be7', reason: "Opponent moved Bg5 to pin, so we move Be7 to develop our bishop and unpin the knight." },
          { san: 'e3', from: 'e2', to: 'e3', piece: 'wP', color: 'w', hint: 'e3', reason: "Opponent moved Be7 to unpin, so we move e3 to solidify our center and open lines for the light-squared bishop." },
          { san: 'O-O', from: 'e8', to: 'g8', piece: 'bK', color: 'b', hint: 'O-O', reason: "Opponent moved e3 to solidify, so we move O-O to safeguard our king and bring the rook into play." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved O-O to castle, so we move Nf3 to develop our knight and maintain central control." },
          { san: 'h6', from: 'h7', to: 'h6', piece: 'bP', color: 'b', hint: 'h6', reason: "Opponent moved Nf3 to develop, so we move h6 to challenge the bishop and ask it to declare its intentions." },
          { san: 'Bh4', from: 'g5', to: 'h4', piece: 'wB', color: 'w', hint: 'Bh4', reason: "Opponent moved h6 to challenge, so we move Bh4 to retreat the bishop while maintaining the pin on the knight." },
          { san: 'b6', from: 'b7', to: 'b6', piece: 'bP', color: 'b', hint: 'b6', reason: "Opponent moved Bh4 to retreat, so we move b6 to initiate the Tartakower Defense, preparing to fianchetto the light-squared bishop and challenge the center." },
        ]
      },
      {
        name: 'Janowski Variation',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d5 to control the center, so we move c4 to initiate the Queen's Gambit, challenging the d5 pawn and offering a pawn for central control." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved c4 to gambit, so we move e6 to decline the gambit and reinforce our d5 pawn while opening lines for the dark-squared bishop." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved e6 to solidify, so we move Nc3 to develop our knight and increase pressure on the d5 square." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "Opponent moved Nc3 to pressure, so we move a6 to initiate the Janowski Variation, preparing for ...dxc4 and ...b5 expansion to challenge White's queenside." },
        ]
      },
      {
        name: 'Manhattan Variation',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d5 to control the center, so we move c4 to initiate the Queen's Gambit, challenging the d5 pawn and offering a pawn for central control." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved c4 to gambit, so we move e6 to decline the gambit and reinforce our d5 pawn while opening lines for the dark-squared bishop." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved e6 to solidify, so we move Nc3 to develop our knight and increase pressure on the d5 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nc3 to pressure d5, so we move Nf6 to develop our knight and defend the d5 pawn." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved Nf6 to develop, so we move Bg5 to pin the knight and increase pressure on Black's position." },
          { san: 'Nbd7', from: 'b8', to: 'd7', piece: 'bN', color: 'b', hint: 'Nbd7', reason: "Opponent moved Bg5 to pin, so we move Nbd7 to develop our knight and prepare for further central action." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved Nbd7 to develop, so we move Nf3 to develop our knight and maintain central control." },
          { san: 'Bb4', from: 'f8', to: 'b4', piece: 'bB', color: 'b', hint: 'Bb4', reason: "Opponent moved Nf3 to develop, so we move Bb4 to initiate the Manhattan Variation, counter-pinning the knight on c3 and creating tactical threats." },
        ]
      },
      {
        name: 'Semi-Tarrasch Defense',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d5 to control the center, so we move c4 to initiate the Queen's Gambit, challenging the d5 pawn and offering a pawn for central control." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved c4 to gambit, so we move e6 to decline the gambit and reinforce our d5 pawn while opening lines for the dark-squared bishop." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved e6 to solidify, so we move Nc3 to develop our knight and increase pressure on the d5 square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nc3 to pressure d5, so we move Nf6 to develop our knight and defend the d5 pawn." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved Nf6 to develop, so we move Nf3 to develop our knight and maintain central control." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Opponent moved Nf3 to develop, so we move c5 to initiate the Semi-Tarrasch Defense, challenging the center without the early ...e6 blocking the bishop." },
        ]
      }
    ]
  },
  {
    id: 'ruy-lopez',
    name: 'Ruy Lopez',
    icon: '🗡️',
    desc: 'The Spanish Game. One of the oldest and most deeply analyzed openings.',
    side: 'white',
    difficulty: 3,
    lines: [
      {
        name: 'Morphy Defense',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack e5, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Opponent moved Nc6 to defend, so we move Bb5 to initiate the Ruy Lopez, pinning the knight and putting pressure on the e5 defender." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "Opponent moved Bb5 to pin our knight, so we move a6 to initiate the Morphy Defense, challenging the bishop and asking it to declare its intentions." },
          { san: 'Ba4', from: 'b5', to: 'a4', piece: 'wB', color: 'w', hint: 'Ba4', reason: "Opponent moved a6 to challenge, so we move Ba4 to retreat the bishop while maintaining the pressure on the knight." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Ba4 to retreat, so we move Nf6 to develop our knight and counter-attack the e4 pawn." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Opponent moved Nf6 to attack e4, so we move O-O to safeguard our king and prepare for further central action." },
          { san: 'Be7', from: 'f8', to: 'e7', piece: 'bB', color: 'b', hint: 'Be7', reason: "Opponent moved O-O to castle, so we move Be7 to develop our bishop and prepare for our own castling." },
          { san: 'Re1', from: 'f1', to: 'e1', piece: 'wR', color: 'w', hint: 'Re1', reason: "Opponent moved Be7 to develop, so we move Re1 to reinforce our e4 pawn and bring the rook into the center." },
          { san: 'b5', from: 'b7', to: 'b5', piece: 'bP', color: 'b', hint: 'b5', reason: "Opponent moved Re1 to reinforce, so we move b5 to kick the bishop again and gain space on the queenside." },
          { san: 'Bb3', from: 'a4', to: 'b3', piece: 'wB', color: 'w', hint: 'Bb3', reason: "Opponent moved b5 to kick, so we move Bb3 to retreat the bishop to a strong diagonal where it eyes the f7 square." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved Bb3 to retreat, so we move d6 to solidify our center and open lines for our light-squared bishop." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "Opponent moved d6 to solidify, so we move c3 to prepare for the d4 expansion and create a retreat square for our bishop." },
          { san: 'O-O', from: 'e8', to: 'g8', piece: 'bK', color: 'b', hint: 'O-O', reason: "Opponent moved c3 to prepare, so we move O-O to safeguard our king and connect our rooks." },
          { san: 'h3', from: 'h2', to: 'h3', piece: 'wP', color: 'w', hint: 'h3', reason: "Opponent moved O-O to castle, so we move h3 to prevent any annoying ...Bg4 pins and safeguard our kingside." },
        ]
      },
      {
        name: 'Berlin Defense',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack e5, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Opponent moved Nc6 to defend, so we move Bb5 to initiate the Ruy Lopez, pinning the knight and putting pressure on the e5 defender." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Bb5 to pin, so we move Nf6 to initiate the Berlin Defense, ignoring the bishop and counter-attacking the e4 pawn." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Opponent moved Nf6 to attack e4, so we move O-O to safeguard our king and prepare for further central action." },
          { san: 'Nxe4', from: 'f6', to: 'e4', piece: 'bN', color: 'b', hint: 'Nxe4', reason: "Opponent moved O-O to castle, so we move Nxe4 to capture the pawn and enter the 'Berlin Wall' variation, challenging White's center." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nxe4 to capture, so we move d4 to strike back in the center and open lines for our pieces." },
          { san: 'Nd6', from: 'e4', to: 'd6', piece: 'bN', color: 'b', hint: 'Nd6', reason: "Opponent moved d4 to strike, so we move Nd6 to retreat our knight and attack the bishop on b5." },
        ]
      },
      {
        name: 'Exchange Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack e5, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Opponent moved Nc6 to defend, so we move Bb5 to initiate the Ruy Lopez, pinning the knight and putting pressure on the e5 defender." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "Opponent moved Bb5 to pin, so we move a6 to challenge the bishop and ask it to declare its intentions." },
          { san: 'Bxc6', from: 'b5', to: 'c6', piece: 'wB', color: 'w', hint: 'Bxc6', reason: "Opponent moved a6 to challenge, so we move Bxc6 to initiate the Exchange Variation, damaging Black's pawn structure immediately in exchange for the bishop pair." },
          { san: 'dxc6', from: 'd7', to: 'c6', piece: 'bP', color: 'b', hint: 'dxc6', reason: "Opponent moved Bxc6 to exchange, so we move dxc6 to recapture the pawn and open lines for our queen and bishop." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Opponent moved dxc6 to recapture, so we move O-O to safeguard our king and prepare for further development." },
        ]
      },
      {
        name: 'Marshall Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack e5, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Opponent moved Nc6 to defend, so we move Bb5 to initiate the Ruy Lopez, pinning the knight and putting pressure on the e5 defender." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "Opponent moved Bb5 to pin, so we move a6 to challenge the bishop and ask it to declare its intentions." },
          { san: 'Ba4', from: 'b5', to: 'a4', piece: 'wB', color: 'w', hint: 'Ba4', reason: "Opponent moved a6 to challenge, so we move Ba4 to retreat the bishop while maintaining the pressure on the knight." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Ba4 to retreat, so we move Nf6 to develop our knight and counter-attack the e4 pawn." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Opponent moved Nf6 to attack e4, so we move O-O to safeguard our king and prepare for further central action." },
          { san: 'Be7', from: 'f8', to: 'e7', piece: 'bB', color: 'b', hint: 'Be7', reason: "Opponent moved O-O to castle, so we move Be7 to develop our bishop and prepare for our own castling." },
          { san: 'Re1', from: 'f1', to: 'e1', piece: 'wR', color: 'w', hint: 'Re1', reason: "Opponent moved Be7 to develop, so we move Re1 to reinforce our e4 pawn and bring the rook into the center." },
          { san: 'b5', from: 'b7', to: 'b5', piece: 'bP', color: 'b', hint: 'b5', reason: "Opponent moved Re1 to reinforce, so we move b5 to kick the bishop again and gain space on the queenside." },
          { san: 'Bb3', from: 'a4', to: 'b3', piece: 'wB', color: 'w', hint: 'Bb3', reason: "Opponent moved b5 to kick, so we move Bb3 to retreat the bishop to a strong diagonal." },
          { san: 'O-O', from: 'e8', to: 'g8', piece: 'bK', color: 'b', hint: 'O-O', reason: "Opponent moved Bb3 to retreat, so we move O-O to safeguard our king and connect our rooks." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "Opponent moved O-O to castle, so we move c3 to prepare for the d4 expansion and create a solid center." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved c3 to prepare, so we move d5 to initiate the Marshall Attack, gambitting a pawn for a powerful kingside attack and initiative." },
        ]
      },
      {
        name: 'Chigorin Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack e5, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Opponent moved Nc6 to defend, so we move Bb5 to initiate the Ruy Lopez, pinning the knight and putting pressure on the e5 defender." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "Opponent moved Bb5 to pin, so we move a6 to challenge the bishop and ask it to declare its intentions." },
          { san: 'Ba4', from: 'b5', to: 'a4', piece: 'wB', color: 'w', hint: 'Ba4', reason: "Opponent moved a6 to challenge, so we move Ba4 to retreat the bishop while maintaining the pressure on the knight." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Ba4 to retreat, so we move Nf6 to develop our knight and counter-attack the e4 pawn." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Opponent moved Nf6 to attack e4, so we move O-O to safeguard our king and prepare for further central action." },
          { san: 'Be7', from: 'f8', to: 'e7', piece: 'bB', color: 'b', hint: 'Be7', reason: "Opponent moved O-O to castle, so we move Be7 to develop our bishop and prepare for our own castling." },
          { san: 'Re1', from: 'f1', to: 'e1', piece: 'wR', color: 'w', hint: 'Re1', reason: "Opponent moved Be7 to develop, so we move Re1 to reinforce our e4 pawn and bring the rook into the center." },
          { san: 'b5', from: 'b7', to: 'b5', piece: 'bP', color: 'b', hint: 'b5', reason: "Opponent moved Re1 to reinforce, so we move b5 to kick the bishop again and gain space on the queenside." },
          { san: 'Bb3', from: 'a4', to: 'b3', piece: 'wB', color: 'w', hint: 'Bb3', reason: "Opponent moved b5 to kick, so we move Bb3 to retreat the bishop to a strong diagonal." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved Bb3 to retreat, so we move d6 to solidify our center and open lines for our light-squared bishop." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "Opponent moved d6 to solidify, so we move c3 to prepare for the d4 expansion and create a solid center." },
          { san: 'O-O', from: 'e8', to: 'g8', piece: 'bK', color: 'b', hint: 'O-O', reason: "Opponent moved c3 to prepare, so we move O-O to safeguard our king and connect our rooks." },
          { san: 'h3', from: 'h2', to: 'h3', piece: 'wP', color: 'w', hint: 'h3', reason: "Opponent moved O-O to castle, so we move h3 to prevent any annoying ...Bg4 pins and safeguard our kingside." },
          { san: 'Na5', from: 'c6', to: 'a5', piece: 'bN', color: 'b', hint: 'Na5', reason: "Opponent moved h3 to prevent, so we move Na5 to initiate the Chigorin Variation, attacking the bishop and preparing for the c5 expansion." },
        ]
      },
      {
        name: 'Breyer Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack e5, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Opponent moved Nc6 to defend, so we move Bb5 to initiate the Ruy Lopez, pinning the knight and putting pressure on the e5 defender." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "Opponent moved Bb5 to pin, so we move a6 to challenge the bishop and ask it to declare its intentions." },
          { san: 'Ba4', from: 'b5', to: 'a4', piece: 'wB', color: 'w', hint: 'Ba4', reason: "Opponent moved a6 to challenge, so we move Ba4 to retreat the bishop while maintaining the pressure on the knight." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Ba4 to retreat, so we move Nf6 to develop our knight and counter-attack the e4 pawn." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Opponent moved Nf6 to attack e4, so we move O-O to safeguard our king and prepare for further central action." },
          { san: 'Be7', from: 'f8', to: 'e7', piece: 'bB', color: 'b', hint: 'Be7', reason: "Opponent moved O-O to castle, so we move Be7 to develop our bishop and prepare for our own castling." },
          { san: 'Re1', from: 'f1', to: 'e1', piece: 'wR', color: 'w', hint: 'Re1', reason: "Opponent moved Be7 to develop, so we move Re1 to reinforce our e4 pawn and bring the rook into the center." },
          { san: 'b5', from: 'b7', to: 'b5', piece: 'bP', color: 'b', hint: 'b5', reason: "Opponent moved Re1 to reinforce, so we move b5 to kick the bishop again and gain space on the queenside." },
          { san: 'Bb3', from: 'a4', to: 'b3', piece: 'wB', color: 'w', hint: 'Bb3', reason: "Opponent moved b5 to kick, so we move Bb3 to retreat the bishop to a strong diagonal." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved Bb3 to retreat, so we move d6 to solidify our center and open lines for our light-squared bishop." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "Opponent moved d6 to solidify, so we move c3 to prepare for the d4 expansion and create a solid center." },
          { san: 'O-O', from: 'e8', to: 'g8', piece: 'bK', color: 'b', hint: 'O-O', reason: "Opponent moved c3 to prepare, so we move O-O to safeguard our king and connect our rooks." },
          { san: 'h3', from: 'h2', to: 'h3', piece: 'wP', color: 'w', hint: 'h3', reason: "Opponent moved O-O to castle, so we move h3 to prevent any annoying ...Bg4 pins and safeguard our kingside." },
          { san: 'Nb8', from: 'c6', to: 'b8', piece: 'bN', color: 'b', hint: 'Nb8', reason: "Opponent moved h3 to prevent, so we move Nb8 to initiate the Breyer Variation, rerouting the knight to d7 for better flexibility and future central action." },
        ]
      },
      {
        name: 'Open Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack e5, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Opponent moved Nc6 to defend, so we move Bb5 to initiate the Ruy Lopez, pinning the knight and putting pressure on the e5 defender." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "Opponent moved Bb5 to pin, so we move a6 to challenge the bishop and ask it to declare its intentions." },
          { san: 'Ba4', from: 'b5', to: 'a4', piece: 'wB', color: 'w', hint: 'Ba4', reason: "Opponent moved a6 to challenge, so we move Ba4 to retreat the bishop while maintaining the pressure on the knight." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Ba4 to retreat, so we move Nf6 to develop our knight and counter-attack the e4 pawn." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Opponent moved Nf6 to attack e4, so we move O-O to safeguard our king and prepare for further central action." },
          { san: 'Nxe4', from: 'f6', to: 'e4', piece: 'bN', color: 'b', hint: 'Nxe4', reason: "Opponent moved O-O to castle, so we move Nxe4 to initiate the Open Variation, capturing the e4 pawn and challenging White to prove their compensation." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nxe4 to capture, so we move d4 to strike in the center and open lines for our pieces." },
          { san: 'b5', from: 'b7', to: 'b5', piece: 'bP', color: 'b', hint: 'b5', reason: "Opponent moved d4 to strike, so we move b5 to kick the bishop and gain space on the queenside." },
          { san: 'Bb3', from: 'a4', to: 'b3', piece: 'wB', color: 'w', hint: 'Bb3', reason: "Opponent moved b5 to kick, so we move Bb3 to retreat the bishop to a strong diagonal." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Bb3 to retreat, so we move d5 to solidify our center and support our knight on e4." },
          { san: 'dxe5', from: 'd4', to: 'e5', piece: 'wP', color: 'w', hint: 'dxe5', reason: "Opponent moved d5 to solidify, so we move dxe5 to recapture the pawn and maintain central pressure." },
          { san: 'Be6', from: 'c8', to: 'e6', piece: 'bB', color: 'b', hint: 'Be6', reason: "Opponent moved dxe5 to recapture, so we move Be6 to develop our bishop and support our d5 pawn." },
        ]
      },
      {
        name: 'Schliemann Defense',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack e5, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Opponent moved Nc6 to defend, so we move Bb5 to initiate the Ruy Lopez, pinning the knight and putting pressure on the e5 defender." },
          { san: 'f5', from: 'f7', to: 'f5', piece: 'bP', color: 'b', hint: 'f5', reason: "Opponent moved Bb5 to pin, so we move f5 to initiate the Schliemann Defense, an aggressive gambit aimed at challenging White's center immediately." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved f5 to gambit, so we move Nc3 to develop our knight and defend the e4 pawn while preparing for central action." },
          { san: 'fxe4', from: 'f5', to: 'e4', piece: 'bP', color: 'b', hint: 'fxe4', reason: "Opponent moved Nc3 to develop, so we move fxe4 to capture the pawn and open the f-file for our rook." },
          { san: 'Nxe4', from: 'c3', to: 'e4', piece: 'wN', color: 'w', hint: 'Nxe4', reason: "Opponent moved fxe4 to capture, so we move Nxe4 to recapture the pawn and centralize our knight." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Nxe4 to recapture, so we move d5 to strike in the center and challenge the centralized knight." },
        ]
      },
      {
        name: 'Steinitz Defense',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack e5, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Opponent moved Nc6 to defend, so we move Bb5 to initiate the Ruy Lopez, pinning the knight and putting pressure on the e5 defender." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved Bb5 to pin, so we move d6 to initiate the Steinitz Defense, a solid but somewhat passive way to defend the e5 pawn." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved d6 to defend, so we move d4 to strike in the center and challenge Black's setup immediately." },
          { san: 'Bd7', from: 'c8', to: 'd7', piece: 'bB', color: 'b', hint: 'Bd7', reason: "Opponent moved d4 to strike, so we move Bd7 to develop our bishop and break the pin on the knight." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Bd7 to unpin, so we move Nc3 to develop our knight and reinforce our center." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nc3 to develop, so we move Nf6 to develop our knight and counter-attack the e4 pawn." },
        ]
      },
      {
        name: 'Zaitsev Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack e5, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Opponent moved Nc6 to defend, so we move Bb5 to initiate the Ruy Lopez, pinning the knight and putting pressure on the e5 defender." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "Opponent moved Bb5 to pin, so we move a6 to challenge the bishop and ask it to declare its intentions." },
          { san: 'Ba4', from: 'b5', to: 'a4', piece: 'wB', color: 'w', hint: 'Ba4', reason: "Opponent moved a6 to challenge, so we move Ba4 to retreat the bishop while maintaining the pressure on the knight." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Ba4 to retreat, so we move Nf6 to develop our knight and counter-attack the e4 pawn." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Opponent moved Nf6 to attack e4, so we move O-O to safeguard our king and prepare for further central action." },
          { san: 'Be7', from: 'f8', to: 'e7', piece: 'bB', color: 'b', hint: 'Be7', reason: "Opponent moved O-O to castle, so we move Be7 to develop our bishop and prepare for our own castling." },
          { san: 'Re1', from: 'f1', to: 'e1', piece: 'wR', color: 'w', hint: 'Re1', reason: "Opponent moved Be7 to develop, so we move Re1 to reinforce our e4 pawn and bring the rook into the center." },
          { san: 'b5', from: 'b7', to: 'b5', piece: 'bP', color: 'b', hint: 'b5', reason: "Opponent moved Re1 to reinforce, so we move b5 to kick the bishop again and gain space on the queenside." },
          { san: 'Bb3', from: 'a4', to: 'b3', piece: 'wB', color: 'w', hint: 'Bb3', reason: "Opponent moved b5 to kick, so we move Bb3 to retreat the bishop to a strong diagonal." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved Bb3 to retreat, so we move d6 to solidify our center and open lines for our light-squared bishop." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "Opponent moved d6 to solidify, so we move c3 to prepare for the d4 expansion and create a solid center." },
          { san: 'O-O', from: 'e8', to: 'g8', piece: 'bK', color: 'b', hint: 'O-O', reason: "Opponent moved c3 to prepare, so we move O-O to safeguard our king and connect our rooks." },
          { san: 'h3', from: 'h2', to: 'h3', piece: 'wP', color: 'w', hint: 'h3', reason: "Opponent moved O-O to castle, so we move h3 to prevent any annoying ...Bg4 pins and safeguard our kingside." },
          { san: 'Bb7', from: 'c8', to: 'b7', piece: 'bB', color: 'b', hint: 'Bb7', reason: "Opponent moved h3 to prevent, so we move Bb7 to initiate the Zaitsev Variation, developing our bishop to the long diagonal and putting pressure on the e4 pawn." },
        ]
      },
      {
        name: 'Archangel Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to claim our own share of the center and prevent White from having a free hand." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to control the center, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack e5, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Opponent moved Nc6 to defend, so we move Bb5 to initiate the Ruy Lopez, pinning the knight and putting pressure on the e5 defender." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "Opponent moved Bb5 to pin, so we move a6 to challenge the bishop and ask it to declare its intentions." },
          { san: 'Ba4', from: 'b5', to: 'a4', piece: 'wB', color: 'w', hint: 'Ba4', reason: "Opponent moved a6 to challenge, so we move Ba4 to retreat the bishop while maintaining the pressure on the knight." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Ba4 to retreat, so we move Nf6 to develop our knight and counter-attack the e4 pawn." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Opponent moved Nf6 to attack e4, so we move O-O to safeguard our king and prepare for further central action." },
          { san: 'Bb7', from: 'c8', to: 'b7', piece: 'bB', color: 'b', hint: 'Bb7', reason: "Opponent moved O-O to castle, so we move Bb7 to initiate the Archangel Variation, developing our bishop to the long diagonal early to put pressure on the center." },
        ]
      },
      {
        name: "Bird's Defense",
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Black responds." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Ruy Lopez." },
          { san: 'Nd4', from: 'c6', to: 'd4', piece: 'bN', color: 'b', hint: 'Nd4', reason: "Bird's Defense! Black immediately challenges the bishop with the knight." },
        ]
      },
      {
        name: 'Classical Defense (Cordel)',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Black responds." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Ruy Lopez." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "The Classical Defense! Black develops the bishop to c5." },
        ]
      },
      {
        name: 'Cozio Defense',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Black responds." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Ruy Lopez." },
          { san: 'Nge7', from: 'g8', to: 'e7', piece: 'bN', color: 'b', hint: 'Nge7', reason: "The Cozio Defense! Black develops the knight to e7 to avoid doubled pawns." },
        ]
      },
      {
        name: 'Smyslov Defense',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Black responds." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Ruy Lopez." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "The Smyslov Defense! Black prepares a kingside fianchetto." },
        ]
      },
      {
        name: 'Siesta Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Black responds." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Ruy Lopez." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "Morphy Defense." },
          { san: 'Ba4', from: 'b5', to: 'a4', piece: 'wB', color: 'w', hint: 'Ba4', reason: "Retreat bishop." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Steinitz Deferred." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "Prepare d4." },
          { san: 'f5', from: 'f7', to: 'f5', piece: 'bP', color: 'b', hint: 'f5', reason: "The Siesta Variation! Black strikes aggressively with f5." },
        ]
      },
      {
        name: 'Worrall Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Black responds." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Develop knight." },
          { san: 'Bb5', from: 'f1', to: 'b5', piece: 'wB', color: 'w', hint: 'Bb5', reason: "Ruy Lopez." },
          { san: 'a6', from: 'a7', to: 'a6', piece: 'bP', color: 'b', hint: 'a6', reason: "Morphy Defense." },
          { san: 'Ba4', from: 'b5', to: 'a4', piece: 'wB', color: 'w', hint: 'Ba4', reason: "Retreat bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Develop knight." },
          { san: 'Qe2', from: 'd1', to: 'e2', piece: 'wQ', color: 'w', hint: 'Qe2', reason: "The Worrall Attack! White develops the queen early to support e4 and prepare Rd1." },
        ]
      }
    ]
  },
  {
    id: 'caro-kann',
    name: 'Caro-Kann Defense',
    icon: '🐢',
    desc: 'Solid and reliable. Black prepares ...d5 with ...c6, keeping the bishop free.',
    side: 'black',
    difficulty: 2,
    lines: [
      {
        name: 'Main Line (Classical)',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5 while keeping our light-squared bishop free." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn while maintaining central pressure." },
          { san: 'dxe4', from: 'd5', to: 'e4', piece: 'bP', color: 'b', hint: 'dxe4', reason: "Opponent moved Nc3 to defend, so we move dxe4 to initiate the exchange of pawns and open lines for our pieces." },
          { san: 'Nxe4', from: 'c3', to: 'e4', piece: 'wN', color: 'w', hint: 'Nxe4', reason: "Opponent moved dxe4 to exchange, so we move Nxe4 to recapture the pawn and centralize our knight." },
          { san: 'Bf5', from: 'c8', to: 'f5', piece: 'bB', color: 'b', hint: 'Bf5', reason: "Opponent moved Nxe4 to recapture, so we move Bf5 to develop our bishop to an active square and attack the centralized knight." },
          { san: 'Ng3', from: 'e4', to: 'g3', piece: 'wN', color: 'w', hint: 'Ng3', reason: "Opponent moved Bf5 to attack, so we move Ng3 to retreat our knight to a safe square while gaining a tempo by attacking the bishop." },
          { san: 'Bg6', from: 'f5', to: 'g6', piece: 'bB', color: 'b', hint: 'Bg6', reason: "Opponent moved Ng3 to attack, so we move Bg6 to retreat our bishop safely while maintaining its influence on the diagonal." },
        ]
      },
      {
        name: 'Panov-Botvinnik Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to challenge, so we move exd5 to initiate the exchange of pawns and open the center." },
          { san: 'cxd5', from: 'c6', to: 'd5', piece: 'bP', color: 'b', hint: 'cxd5', reason: "Opponent moved exd5 to exchange, so we move cxd5 to recapture the pawn and maintain our share of the center." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved cxd5 to recapture, so we move c4 to initiate the Panov-Botvinnik Attack, immediately challenging d5 and aiming for an open game." },
        ]
      },
      {
        name: 'Advance Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "Opponent moved d5 to challenge, so we move e5 to initiate the Advance Variation, gaining space and cramping Black's position." },
          { san: 'Bf5', from: 'c8', to: 'f5', piece: 'bB', color: 'b', hint: 'Bf5', reason: "Opponent moved e5 to gain space, so we move Bf5 to develop our bishop to an active square before it gets blocked by e6." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved Bf5 to develop, so we move Nf3 to develop our knight and control key central squares." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved Nf3 to develop, so we move e6 to solidify our pawn structure and prepare for further development." },
          { san: 'Be2', from: 'f1', to: 'e2', piece: 'wB', color: 'w', hint: 'Be2', reason: "Opponent moved e6 to solidify, so we move Be2 to develop our bishop and prepare for castling." },
          { san: 'c5', from: 'c6', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Opponent moved Be2 to develop, so we move c5 to challenge White's central pawn on d4 and create counterplay." },
        ]
      },
      {
        name: 'Two Knights Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved c6 to prepare, so we move Nc3 to develop our knight and control key central squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Nc3 to develop, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved d5 to challenge, so we move Nf3 to initiate the Two Knights Attack, developing both knights early to put pressure on the center." },
        ]
      },
      {
        name: 'Fantasy Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'f3', from: 'f2', to: 'f3', piece: 'wP', color: 'w', hint: 'f3', reason: "Opponent moved d5 to challenge, so we move f3 to initiate the Fantasy Variation, solidifying our e4 pawn while preparing for sharp, tactical play." },
        ]
      },
      {
        name: 'Hillbilly Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved c6 to prepare, so we move Bc4 to initiate the Hillbilly Attack, an unusual but aggressive move aimed at putting pressure on the center early." },
        ]
      },
      {
        name: 'Accelerated Panov Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to challenge, so we move exd5 to initiate the exchange of pawns and open the center." },
          { san: 'cxd5', from: 'c6', to: 'd5', piece: 'bP', color: 'b', hint: 'cxd5', reason: "Opponent moved exd5 to exchange, so we move cxd5 to recapture the pawn and maintain our share of the center." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved cxd5 to recapture, so we move c4 to initiate the Accelerated Panov Attack, immediately challenging the d5 pawn and aiming for an open game." },
        ]
      },
      {
        name: 'Exchange Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to challenge, so we move exd5 to initiate the Exchange Variation, simplifying the center and leading to a more solid position." },
          { san: 'cxd5', from: 'c6', to: 'd5', piece: 'bP', color: 'b', hint: 'cxd5', reason: "Opponent moved exd5 to exchange, so we move cxd5 to recapture the pawn and maintain our share of the center." },
          { san: 'Bd3', from: 'f1', to: 'd3', piece: 'wB', color: 'w', hint: 'Bd3', reason: "Opponent moved cxd5 to recapture, so we move Bd3 to develop our bishop to a strong diagonal and prepare for castling." },
        ]
      },
      {
        name: 'Tartakower Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn." },
          { san: 'dxe4', from: 'd5', to: 'e4', piece: 'bP', color: 'b', hint: 'dxe4', reason: "Opponent moved Nc3 to defend, so we move dxe4 to initiate the exchange of pawns and open lines." },
          { san: 'Nxe4', from: 'c3', to: 'e4', piece: 'wN', color: 'w', hint: 'Nxe4', reason: "Opponent moved dxe4 to exchange, so we move Nxe4 to recapture the pawn and centralize our knight." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nxe4 to recapture, so we move Nf6 to develop our knight and challenge White's centralized knight immediately." },
          { san: 'Nxf6+', from: 'e4', to: 'f6', piece: 'wN', color: 'w', hint: 'Nxf6+', reason: "Opponent moved Nf6 to challenge, so we move Nxf6+ to initiate the exchange of knights." },
          { san: 'exf6', from: 'e7', to: 'f6', piece: 'bP', color: 'b', hint: 'exf6', reason: "Opponent moved Nxf6+ to exchange, so we move exf6 to recapture the knight, accepting doubled pawns in exchange for dynamic play and open lines." },
        ]
      },
      {
        name: 'Bronstein-Larsen Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn." },
          { san: 'dxe4', from: 'd5', to: 'e4', piece: 'bP', color: 'b', hint: 'dxe4', reason: "Opponent moved Nc3 to defend, so we move dxe4 to initiate the exchange of pawns and open lines." },
          { san: 'Nxe4', from: 'c3', to: 'e4', piece: 'wN', color: 'w', hint: 'Nxe4', reason: "Opponent moved dxe4 to exchange, so we move Nxe4 to recapture the pawn and centralize our knight." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nxe4 to recapture, so we move Nf6 to develop our knight and challenge White's centralized knight." },
          { san: 'Nxf6+', from: 'e4', to: 'f6', piece: 'wN', color: 'w', hint: 'Nxf6+', reason: "Opponent moved Nf6 to challenge, so we move Nxf6+ to initiate the exchange of knights." },
          { san: 'gxf6', from: 'g7', to: 'f6', piece: 'bP', color: 'b', hint: 'gxf6', reason: "Opponent moved Nxf6+ to exchange, so we move gxf6 to recapture the knight, accepting structural damage for the g-file and active pieces." },
        ]
      },
      {
        name: 'Gurgenidze System',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved Nc3 to defend, so we move g6 to initiate the Gurgenidze System, preparing to fianchetto the bishop and play d5 later." },
        ]
      },
      {
        name: 'Karpov Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn." },
          { san: 'dxe4', from: 'd5', to: 'e4', piece: 'bP', color: 'b', hint: 'dxe4', reason: "Opponent moved Nc3 to defend, so we move dxe4 to initiate the exchange of pawns and open lines." },
          { san: 'Nxe4', from: 'c3', to: 'e4', piece: 'wN', color: 'w', hint: 'Nxe4', reason: "Opponent moved dxe4 to exchange, so we move Nxe4 to recapture the pawn and centralize our knight." },
          { san: 'Nd7', from: 'b8', to: 'd7', piece: 'bN', color: 'b', hint: 'Nd7', reason: "Opponent moved Nxe4 to recapture, so we move Nd7 to initiate the Karpov Variation, developing the knight to d7 to prepare ...Ngf6 without doubled pawns." },
        ]
      },
      {
        name: 'Advance Variation: Short Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "Opponent moved d5 to challenge, so we move e5 to initiate the Advance Variation, gaining space and cramping Black's position." },
          { san: 'Bf5', from: 'c8', to: 'f5', piece: 'bB', color: 'b', hint: 'Bf5', reason: "Opponent moved e5 to gain space, so we move Bf5 to develop our bishop to an active square before it gets blocked." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved Bf5 to develop, so we move Nf3 to develop our knight and control key central squares." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved Nf3 to develop, so we move e6 to solidify our pawn structure." },
          { san: 'Be2', from: 'f1', to: 'e2', piece: 'wB', color: 'w', hint: 'Be2', reason: "Opponent moved e6 to solidify, so we move Be2 to initiate the Short Variation, developing the bishop to e2 to prepare for castling and c3." },
        ]
      },
      {
        name: 'Advance Variation: Tal Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "Opponent moved d5 to challenge, so we move e5 to initiate the Advance Variation, gaining space and cramping Black's position." },
          { san: 'Bf5', from: 'c8', to: 'f5', piece: 'bB', color: 'b', hint: 'Bf5', reason: "Opponent moved e5 to gain space, so we move Bf5 to develop our bishop to an active square before it gets blocked." },
          { san: 'h4', from: 'h2', to: 'h4', piece: 'wP', color: 'w', hint: 'h4', reason: "Opponent moved Bf5 to develop, so we move h4 to initiate the Tal Variation, immediately threatening to trap the bishop with g4 and h5." },
        ]
      },
      {
        name: 'Advance Variation: Shirov Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "Opponent moved d5 to challenge, so we move e5 to initiate the Advance Variation, gaining space and cramping Black's position." },
          { san: 'Bf5', from: 'c8', to: 'f5', piece: 'bB', color: 'b', hint: 'Bf5', reason: "Opponent moved e5 to gain space, so we move Bf5 to develop our bishop to an active square before it gets blocked." },
          { san: 'g4', from: 'g2', to: 'g4', piece: 'wP', color: 'w', hint: 'g4', reason: "Opponent moved Bf5 to develop, so we move g4 to initiate the Shirov Variation, an extremely aggressive pawn push to harass the bishop." },
        ]
      },
      {
        name: 'Advance Variation: Botvinnik-Carls',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "Opponent moved d5 to challenge, so we move e5 to initiate the Advance Variation, gaining space and cramping Black's position." },
          { san: 'c5', from: 'c6', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Opponent moved e5 to gain space, so we move c5 to initiate the Botvinnik-Carls variation, immediately striking at the d4 pawn without developing the bishop first." },
        ]
      },
      {
        name: 'Advance Variation: Bayonet Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "Opponent moved d5 to challenge, so we move e5 to initiate the Advance Variation, gaining space and cramping Black's position." },
          { san: 'Bf5', from: 'c8', to: 'f5', piece: 'bB', color: 'b', hint: 'Bf5', reason: "Opponent moved e5 to gain space, so we move Bf5 to develop our bishop to an active square." },
          { san: 'g4', from: 'g2', to: 'g4', piece: 'wP', color: 'w', hint: 'g4', reason: "Opponent moved Bf5 to develop, so we move g4 to initiate the Bayonet Attack, aggressively expanding on the kingside." },
          { san: 'Bg6', from: 'f5', to: 'g6', piece: 'bB', color: 'b', hint: 'Bg6', reason: "Opponent moved g4 to expand, so we move Bg6 to retreat our bishop safely." },
          { san: 'h4', from: 'h2', to: 'h4', piece: 'wP', color: 'w', hint: 'h4', reason: "Opponent moved Bg6 to retreat, so we move h4 to continue the kingside expansion and pressure the bishop." },
          { san: 'h5', from: 'h7', to: 'h5', piece: 'bP', color: 'b', hint: 'h5', reason: "Opponent moved h4 to expand, so we move h5 to stop the expansion and challenge White's kingside structure." },
          { san: 'e6', from: 'e5', to: 'e6', piece: 'wP', color: 'w', hint: 'e6', reason: "Opponent moved h5 to stop expansion, so we move e6 to sacrifice a pawn in the Bayonet Attack to cramp Black's position and create attacking chances." },
        ]
      },
      {
        name: 'Two Knights Variation: Mindeno',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved c6 to prepare, so we move Nc3 to develop our knight and control key central squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Nc3 to develop, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved d5 to challenge, so we move Nf3 to initiate the Two Knights Attack, developing both knights early." },
          { san: 'Bg4', from: 'c8', to: 'g4', piece: 'bB', color: 'b', hint: 'Bg4', reason: "Opponent moved Nf3 to develop, so we move Bg4 to initiate the Mindeno Variation, pinning the knight immediately to create pressure." },
        ]
      },
      {
        name: 'Fantasy Variation: 3...e6',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'f3', from: 'f2', to: 'f3', piece: 'wP', color: 'w', hint: 'f3', reason: "Opponent moved d5 to challenge, so we move f3 to initiate the Fantasy Variation, solidifying our e4 pawn while preparing for sharp play." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved f3 to solidify, so we move e6 to play solidly, preparing to challenge the center later while keeping our position secure." },
        ]
      },
      {
        name: 'Fantasy Variation: 3...dxe4',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'f3', from: 'f2', to: 'f3', piece: 'wP', color: 'w', hint: 'f3', reason: "Opponent moved d5 to challenge, so we move f3 to initiate the Fantasy Variation, solidifying our e4 pawn while preparing for sharp play." },
          { san: 'dxe4', from: 'd5', to: 'e4', piece: 'bP', color: 'b', hint: 'dxe4', reason: "Opponent moved f3 to solidify, so we move dxe4 to accept the challenge and initiate an exchange of pawns." },
          { san: 'fxe4', from: 'f3', to: 'e4', piece: 'wP', color: 'w', hint: 'fxe4', reason: "Opponent moved dxe4 to exchange, so we move fxe4 to recapture the pawn and maintain our central presence." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved fxe4 to recapture, so we move e5 to strike back in the center immediately and challenge White's setup." },
        ]
      },
      {
        name: 'Breyer Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd3', from: 'd2', to: 'd3', piece: 'wP', color: 'w', hint: 'd3', reason: "Opponent moved c6 to prepare, so we move d3 to initiate the Breyer Variation, a quiet move preparing a slow buildup and solidifying the e4 pawn." },
        ]
      },
      {
        name: 'Masi Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved c6 to prepare, so we move Nf3 to develop our knight and control key central squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Nf3 to develop, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'd3', from: 'd2', to: 'd3', piece: 'wP', color: 'w', hint: 'd3', reason: "Opponent moved d5 to challenge, so we move d3 to initiate the Masi Variation, a quiet move solidifying e4 and preparing a slow buildup with the knight developed." },
        ]
      },
      {
        name: 'Goldman Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved c6 to prepare, so we move Nc3 to develop our knight and control the center." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Nc3 to develop, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'Qf3', from: 'd1', to: 'f3', piece: 'wQ', color: 'w', hint: 'Qf3', reason: "Opponent moved d5 to challenge, so we move Qf3 to initiate the Goldman Variation, developing the queen early to pressure d5 and create tactical complications." },
        ]
      },
      {
        name: 'Rasa-Studier Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn." },
          { san: 'dxe4', from: 'd5', to: 'e4', piece: 'bP', color: 'b', hint: 'dxe4', reason: "Opponent moved Nc3 to defend, so we move dxe4 to initiate the exchange of pawns and open lines." },
          { san: 'f3', from: 'f2', to: 'f3', piece: 'wP', color: 'w', hint: 'f3', reason: "Opponent moved dxe4 to exchange, so we move f3 to initiate the Rasa-Studier Gambit, offering a pawn for rapid development and attacking chances." },
        ]
      },
      {
        name: 'Von Hennig Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn." },
          { san: 'dxe4', from: 'd5', to: 'e4', piece: 'bP', color: 'b', hint: 'dxe4', reason: "Opponent moved Nc3 to defend, so we move dxe4 to initiate the exchange of pawns and open lines." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved dxe4 to exchange, so we move Bc4 to initiate the Von Hennig Gambit, developing the bishop aggressively to pressure f7 and gain a lead in development." },
        ]
      },
      {
        name: 'Milner-Barry Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn." },
          { san: 'dxe4', from: 'd5', to: 'e4', piece: 'bP', color: 'b', hint: 'dxe4', reason: "Opponent moved Nc3 to defend, so we move dxe4 to initiate the exchange of pawns and open lines." },
          { san: 'f3', from: 'f2', to: 'f3', piece: 'wP', color: 'w', hint: 'f3', reason: "Opponent moved dxe4 to exchange, so we move f3 to offer a pawn for rapid development." },
          { san: 'exf3', from: 'e4', to: 'f3', piece: 'bP', color: 'b', hint: 'exf3', reason: "Opponent moved f3 to offer a gambit, so we move exf3 to accept the gambit and gain a pawn." },
          { san: 'Nxf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nxf3', reason: "Opponent moved exf3 to accept, so we move Nxf3 to initiate the Milner-Barry Gambit, recapturing the pawn and gaining a significant lead in development." },
        ]
      },
      {
        name: 'Euwe Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to challenge, so we move exd5 to initiate the exchange of pawns and open the center." },
          { san: 'cxd5', from: 'c6', to: 'd5', piece: 'bP', color: 'b', hint: 'cxd5', reason: "Opponent moved exd5 to exchange, so we move cxd5 to recapture the pawn and maintain our share of the center." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved cxd5 to recapture, so we move c4 to initiate the Panov Attack, immediately challenging the d5 pawn." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved c4 to challenge, so we move Nf6 to develop our knight and control key central squares." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Nf6 to develop, so we move Nc3 to develop our knight and defend the d5 pawn." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved Nc3 to defend, so we move e6 to solidify our pawn structure and prepare for development." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e6 to solidify, so we move Nf3 to develop our knight and control the center." },
          { san: 'Be7', from: 'f8', to: 'e7', piece: 'bB', color: 'b', hint: 'Be7', reason: "Opponent moved Nf3 to develop, so we move Be7 to develop our bishop and prepare for castling." },
          { san: 'cxd5', from: 'c4', to: 'd5', piece: 'wP', color: 'w', hint: 'cxd5', reason: "Opponent moved Be7 to develop, so we move cxd5 to initiate the Euwe Attack, simplifying the center to reach a solid and balanced position." },
        ]
      },
      {
        name: 'De Bruycker Defense',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'Na6', from: 'b8', to: 'a6', piece: 'bN', color: 'b', hint: 'Na6', reason: "Opponent moved d4 to control the center, so we move Na6 to initiate the De Bruycker Defense, an offbeat knight development aiming to avoid standard theory and create unique imbalances." },
        ]
      },
      {
        name: 'Steiner Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved c6 to prepare, so we move c4 to initiate the Steiner Variation, challenging the d5 square from the flank immediately." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved c4 to challenge, so we move d5 to strike back in the center and challenge White's setup." },
          { san: 'cxd5', from: 'c4', to: 'd5', piece: 'wP', color: 'w', hint: 'cxd5', reason: "Opponent moved d5 to strike, so we move cxd5 to initiate the exchange of pawns." },
          { san: 'cxd5', from: 'c6', to: 'd5', piece: 'bP', color: 'b', hint: 'cxd5', reason: "Opponent moved cxd5 to exchange, so we move cxd5 to recapture the pawn and maintain central presence." },
          { san: 'Qa4+', from: 'd1', to: 'a4', piece: 'wQ', color: 'w', hint: 'Qa4+', reason: "Opponent moved cxd5 to recapture, so we move Qa4+ to deliver a check and put immediate pressure on the d5 pawn." },
        ]
      },
      {
        name: 'Apocalypse Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved c6 to prepare, so we move Nf3 to develop our knight and control key central squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Nf3 to develop, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to challenge, so we move exd5 to initiate the exchange of pawns." },
          { san: 'cxd5', from: 'c6', to: 'd5', piece: 'bP', color: 'b', hint: 'cxd5', reason: "Opponent moved exd5 to exchange, so we move cxd5 to recapture the pawn and maintain central presence." },
          { san: 'Ne5', from: 'f3', to: 'e5', piece: 'wN', color: 'w', hint: 'Ne5', reason: "Opponent moved cxd5 to recapture, so we move Ne5 to initiate the Apocalypse Attack, jumping the knight to a powerful central square early to create immediate tactical threats." },
        ]
      },
      {
        name: 'Spassky Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn." },
          { san: 'dxe4', from: 'd5', to: 'e4', piece: 'bP', color: 'b', hint: 'dxe4', reason: "Opponent moved Nc3 to defend, so we move dxe4 to initiate the exchange of pawns and open lines." },
          { san: 'Nxe4', from: 'c3', to: 'e4', piece: 'wN', color: 'w', hint: 'Nxe4', reason: "Opponent moved dxe4 to exchange, so we move Nxe4 to recapture the pawn and centralize our knight." },
          { san: 'Nd7', from: 'b8', to: 'd7', piece: 'bN', color: 'b', hint: 'Nd7', reason: "Opponent moved Nxe4 to recapture, so we move Nd7 to develop our knight and prepare for further development." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved Nd7 to develop, so we move Bc4 to develop our bishop to an active square and pressure f7." },
          { san: 'Ngf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Ngf6', reason: "Opponent moved Bc4 to develop, so we move Ngf6 to develop our knight and challenge White's centralized knight." },
          { san: 'Ng5', from: 'e4', to: 'g5', piece: 'wN', color: 'w', hint: 'Ng5', reason: "Opponent moved Ngf6 to challenge, so we move Ng5 to initiate the Spassky Variation, immediately putting pressure on the f7 square and creating attacking possibilities." },
        ]
      },
      {
        name: 'Flohr Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved e4 to control the center, so we move c6 to initiate the Caro-Kann Defense, preparing to support d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved c6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to challenge White's central control and strike back immediately." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn." },
          { san: 'dxe4', from: 'd5', to: 'e4', piece: 'bP', color: 'b', hint: 'dxe4', reason: "Opponent moved Nc3 to defend, so we move dxe4 to initiate the exchange of pawns and open lines." },
          { san: 'Nxe4', from: 'c3', to: 'e4', piece: 'wN', color: 'w', hint: 'Nxe4', reason: "Opponent moved dxe4 to exchange, so we move Nxe4 to recapture the pawn and centralize our knight." },
          { san: 'Bf5', from: 'c8', to: 'f5', piece: 'bB', color: 'b', hint: 'Bf5', reason: "Opponent moved Nxe4 to recapture, so we move Bf5 to develop our bishop to an active square and challenge the knight." },
          { san: 'Ng3', from: 'e4', to: 'g3', piece: 'wN', color: 'w', hint: 'Ng3', reason: "Opponent moved Bf5 to challenge, so we move Ng3 to retreat the knight and attack the bishop." },
          { san: 'Bg6', from: 'f5', to: 'g6', piece: 'bB', color: 'b', hint: 'Bg6', reason: "Opponent moved Ng3 to attack, so we move Bg6 to retreat the bishop to a safe and active square." },
          { san: 'h4', from: 'h2', to: 'h4', piece: 'wP', color: 'w', hint: 'h4', reason: "Opponent moved Bg6 to retreat, so we move h4 to initiate the Flohr Variation, expanding on the kingside and threatening to trap the bishop with h5." },
        ]
      }
    ]
  },
  {
    id: 'london-system',
    name: 'London System',
    icon: '🌉',
    desc: 'Solid and versatile setup for White. Can be played against almost anything.',
    side: 'white',
    difficulty: 1,
    lines: [
      {
        name: 'Standard Setup',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to mirror White's control and strike back immediately." },
          { san: 'Bf4', from: 'c1', to: 'f4', piece: 'wB', color: 'w', hint: 'Bf4', reason: "Opponent moved d5 to mirror, so we move Bf4 to initiate the London System, developing the bishop early to a strong and active square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Bf4 to develop, so we move Nf6 to develop our knight and control key central squares." },
          { san: 'e3', from: 'e2', to: 'e3', piece: 'wP', color: 'w', hint: 'e3', reason: "Opponent moved Nf6 to develop, so we move e3 to solidify the center and open lines for our other bishop." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved e3 to solidify, so we move e6 to develop our own pieces and prepare for further central control." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e6 to develop, so we move Nf3 to develop our kingside knight and control the center." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Opponent moved Nf3 to develop, so we move c5 to challenge White's central control immediately." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "Opponent moved c5 to challenge, so we move c3 to create the 'London Pyramid' structure, ensuring a very solid and defensible center." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved c3 to solidify, so we move Nc6 to develop our knight and increase pressure on the center." },
          { san: 'Nbd2', from: 'b1', to: 'd2', piece: 'wN', color: 'w', hint: 'Nbd2', reason: "Opponent moved Nc6 to develop, so we move Nbd2 to complete the standard London development and prepare for further piece coordination." },
        ]
      },
      {
        name: 'Jobava London',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to mirror White's control and strike back immediately." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to mirror, so we move Nc3 to initiate the Jobava London, developing the knight before the bishop to pressure d5 and prepare for an aggressive setup." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nc3 to pressure, so we move Nf6 to develop our knight and defend the d5 pawn." },
          { san: 'Bf4', from: 'c1', to: 'f4', piece: 'wB', color: 'w', hint: 'Bf4', reason: "Opponent moved Nf6 to defend, so we move Bf4 to complete the London setup, developing the bishop to a strong and active square." },
        ]
      },
      {
        name: 'London vs King\'s Indian',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and control key central squares." },
          { san: 'Bf4', from: 'c1', to: 'f4', piece: 'wB', color: 'w', hint: 'Bf4', reason: "Opponent moved Nf6 to develop, so we move Bf4 to initiate the London System, developing the bishop to a strong and active square." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved Bf4 to develop, so we move g6 to prepare to fianchetto the bishop and enter King's Indian structures." },
          { san: 'e3', from: 'e2', to: 'e3', piece: 'wP', color: 'w', hint: 'e3', reason: "Opponent moved g6 to prepare, so we move e3 to solidify the center and open lines for our other bishop." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Opponent moved e3 to solidify, so we move Bg7 to fianchetto our bishop and control the long diagonal." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved Bg7 to fianchetto, so we move Nf3 to develop our knight and control the center." },
          { san: 'O-O', from: 'e8', to: 'g8', piece: 'bK', color: 'b', hint: 'O-O', reason: "Opponent moved Nf3 to develop, so we move O-O to safeguard our king and coordinate our pieces." },
          { san: 'h3', from: 'h2', to: 'h3', piece: 'wP', color: 'w', hint: 'h3', reason: "Opponent moved O-O to safeguard, so we move h3 to create a 'luft' for our bishop, preventing it from being trapped or exchanged." },
        ]
      },
      {
        name: 'London vs Dutch',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'f5', from: 'f7', to: 'f5', piece: 'bP', color: 'b', hint: 'f5', reason: "Opponent moved d4 to control the center, so we move f5 to initiate the Dutch Defense, aiming for an imbalanced and aggressive game." },
          { san: 'Bf4', from: 'c1', to: 'f4', piece: 'wB', color: 'w', hint: 'Bf4', reason: "Opponent moved f5 to initiate, so we move Bf4 to initiate the London System against the Dutch, developing the bishop to a strong square." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Bf4 to develop, so we move Nf6 to develop our knight and control key central squares." },
          { san: 'e3', from: 'e2', to: 'e3', piece: 'wP', color: 'w', hint: 'e3', reason: "Opponent moved Nf6 to develop, so we move e3 to solidify the center and open lines for our other bishop." },
        ]
      },
      {
        name: 'London vs Benoni',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and control key central squares." },
          { san: 'Bf4', from: 'c1', to: 'f4', piece: 'wB', color: 'w', hint: 'Bf4', reason: "Opponent moved Nf6 to develop, so we move Bf4 to initiate the London System, developing the bishop to a strong and active square." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Opponent moved Bf4 to develop, so we move c5 to initiate the Benoni counter-strike, challenging White's central control immediately." },
          { san: 'e3', from: 'e2', to: 'e3', piece: 'wP', color: 'w', hint: 'e3', reason: "Opponent moved c5 to challenge, so we move e3 to solidify the center and open lines for our other bishop." },
        ]
      },
      {
        name: 'London vs Slav',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control the center, so we move d5 to mirror White's control and strike back immediately." },
          { san: 'Bf4', from: 'c1', to: 'f4', piece: 'wB', color: 'w', hint: 'Bf4', reason: "Opponent moved d5 to mirror, so we move Bf4 to initiate the London System, developing the bishop to a strong and active square." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved Bf4 to develop, so we move c6 to initiate the Slav setup, preparing to support d5 and solidify our pawn structure." },
          { san: 'e3', from: 'e2', to: 'e3', piece: 'wP', color: 'w', hint: 'e3', reason: "Opponent moved c6 to prepare, so we move e3 to solidify the center and open lines for our other bishop." },
          { san: 'Bf5', from: 'c8', to: 'f5', piece: 'bB', color: 'b', hint: 'Bf5', reason: "Opponent moved e3 to solidify, so we move Bf5 to develop our bishop symmetrically and challenge White's control of the diagonal." },
        ]
      },
      {
        name: 'London vs Grunfeld',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and control key central squares." },
          { san: 'Bf4', from: 'c1', to: 'f4', piece: 'wB', color: 'w', hint: 'Bf4', reason: "Opponent moved Nf6 to develop, so we move Bf4 to initiate the London System, developing the bishop to a strong and active square." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved Bf4 to develop, so we move g6 to prepare to fianchetto the bishop and enter Grunfeld structures." },
          { san: 'e3', from: 'e2', to: 'e3', piece: 'wP', color: 'w', hint: 'e3', reason: "Opponent moved g6 to prepare, so we move e3 to solidify the center and open lines for our other bishop." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Opponent moved e3 to solidify, so we move Bg7 to fianchetto our bishop and control the long diagonal." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved Bg7 to fianchetto, so we move Nf3 to develop our knight and control the center." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Nf3 to develop, so we move d5 to initiate the Grunfeld strike, challenging the center with d5 and creating immediate imbalances." },
        ]
      }
    ]
  },
  {
    id: 'scandinavian',
    name: 'Scandinavian Defense',
    icon: '❄️',
    desc: 'Aggressive response to 1.e4. Challenge the center immediately.',
    side: 'black',
    difficulty: 2,
    lines: [
      {
        name: 'Main Line (Qa5)',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved e4 to control the center, so we move d5 to initiate the Scandinavian Defense, striking at White's center immediately." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to strike, so we move exd5 to accept the challenge and exchange pawns." },
          { san: 'Qxd5', from: 'd8', to: 'd5', piece: 'bQ', color: 'b', hint: 'Qxd5', reason: "Opponent moved exd5 to exchange, so we move Qxd5 to recapture the pawn with our queen, maintaining central presence." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Qxd5 to recapture, so we move Nc3 to develop our knight and gain a tempo by attacking the queen." },
          { san: 'Qa5', from: 'd5', to: 'a5', piece: 'bQ', color: 'b', hint: 'Qa5', reason: "Opponent moved Nc3 to attack, so we move Qa5 to retreat the queen to a safe and active square where it remains a threat." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Qa5 to retreat, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control, so we move Nf6 to develop our knight and prepare for further central play." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved Nf6 to develop, so we move Nf3 to develop our knight and control the center." },
          { san: 'c6', from: 'c7', to: 'c6', piece: 'bP', color: 'b', hint: 'c6', reason: "Opponent moved Nf3 to develop, so we move c6 to create a retreat square for our queen and solidify our position." },
        ]
      },
      {
        name: 'Modern Variation (2...Nf6)',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved e4 to control the center, so we move d5 to initiate the Scandinavian Defense, striking at White's center immediately." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to strike, so we move exd5 to accept the challenge and exchange pawns." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved exd5 to exchange, so we move Nf6 to initiate the Modern Variation, delaying recapturing to develop our pieces first." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nf6 to develop, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'Nxd5', from: 'f6', to: 'd5', piece: 'bN', color: 'b', hint: 'Nxd5', reason: "Opponent moved d4 to control, so we move Nxd5 to recapture the pawn with our knight and centralize our piece." },
        ]
      },
      {
        name: 'Gubinsky-Melts Defense (3...Qd6)',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved e4 to control the center, so we move d5 to initiate the Scandinavian Defense, striking at White's center immediately." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to strike, so we move exd5 to accept the challenge and exchange pawns." },
          { san: 'Qxd5', from: 'd8', to: 'd5', piece: 'bQ', color: 'b', hint: 'Qxd5', reason: "Opponent moved exd5 to exchange, so we move Qxd5 to recapture the pawn with our queen, maintaining central presence." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Qxd5 to recapture, so we move Nc3 to develop our knight and gain a tempo by attacking the queen." },
          { san: 'Qd6', from: 'd5', to: 'd6', piece: 'bQ', color: 'b', hint: 'Qd6', reason: "Opponent moved Nc3 to attack, so we move Qd6 to initiate the Gubinsky-Melts Defense, retreating the queen to a solid square where it remains active and safe." },
        ]
      },
      {
        name: 'Patzer Variation (3...Qe5+)',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved e4 to control the center, so we move d5 to initiate the Scandinavian Defense, striking at White's center immediately." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to strike, so we move exd5 to accept the challenge and exchange pawns." },
          { san: 'Qxd5', from: 'd8', to: 'd5', piece: 'bQ', color: 'b', hint: 'Qxd5', reason: "Opponent moved exd5 to exchange, so we move Qxd5 to recapture the pawn with our queen, maintaining central presence." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Qxd5 to recapture, so we move Nc3 to develop our knight and gain a tempo by attacking the queen." },
          { san: 'Qe5+', from: 'd5', to: 'e5', piece: 'bQ', color: 'b', hint: 'Qe5+', reason: "Opponent moved Nc3 to attack, so we move Qe5+ to initiate the Patzer Variation, delivering a tricky check to disrupt White's development." },
        ]
      },
      {
        name: 'Icelandic Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved e4 to control the center, so we move d5 to initiate the Scandinavian Defense, striking at White's center immediately." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to strike, so we move exd5 to accept the challenge and exchange pawns." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved exd5 to exchange, so we move Nf6 to develop our knight and prepare to recapture the pawn." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to try and hold onto the extra pawn." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved c4 to hold, so we move e6 to initiate the Icelandic Gambit, offering another pawn for rapid development and attacking lines." },
          { san: 'dxe6', from: 'd5', to: 'e6', piece: 'wP', color: 'w', hint: 'dxe6', reason: "Opponent moved e6 to offer, so we move dxe6 to accept the gambit and gain another pawn." },
          { san: 'Bxe6', from: 'f8', to: 'e6', piece: 'bB', color: 'b', hint: 'Bxe6', reason: "Opponent moved dxe6 to accept, so we move Bxe6 to recapture the pawn with our bishop, gaining a tempo and developing a piece." },
        ]
      },
      {
        name: 'Portuguese Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved e4 to control the center, so we move d5 to initiate the Scandinavian Defense, striking at White's center immediately." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to strike, so we move exd5 to accept the challenge and exchange pawns." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved exd5 to exchange, so we move Nf6 to develop our knight and prepare to recapture the pawn." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nf6 to develop, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'Bg4', from: 'c8', to: 'g4', piece: 'bB', color: 'b', hint: 'Bg4', reason: "Opponent moved d4 to control, so we move Bg4 to initiate the Portuguese Gambit, pinning the knight and ignoring the pawn on d5 to focus on rapid development and pressure." },
        ]
      }
    ]
  },
  {
    id: 'kings-indian',
    name: "King's Indian Defense",
    icon: '⚔️',
    desc: 'Hypermodern defense. Let White build the center, then attack it.',
    side: 'black',
    difficulty: 3,
    lines: [
      {
        name: 'Classical Variation',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved c4 to expand, so we move g6 to prepare to fianchetto our bishop and initiate the King's Indian setup." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved g6 to prepare, so we move Nc3 to develop our knight and support the e4 pawn push." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Opponent moved Nc3 to develop, so we move Bg7 to complete the fianchetto and place our bishop on a powerful diagonal." },
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Opponent moved Bg7 to fianchetto, so we move e4 to establish a full pawn center and claim significant space." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved e4 to claim space, so we move d6 to prevent White from playing e5 and to support our own e5 break later." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved d6 to solidify, so we move Nf3 to develop our knight and prepare for castling." },
          { san: 'O-O', from: 'e8', to: 'g8', piece: 'bK', color: 'b', hint: 'O-O', reason: "Opponent moved Nf3 to develop, so we move O-O to bring our king to safety and activate our rook." },
          { san: 'Be2', from: 'f1', to: 'e2', piece: 'wB', color: 'w', hint: 'Be2', reason: "Opponent moved O-O to castle, so we move Be2 to develop our bishop and prepare for our own castling." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved Be2 to develop, so we move e5 to initiate the King's Indian counterattack and challenge White's central dominance." },
        ]
      },
      {
        name: 'Saemisch Variation',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved c4 to expand, so we move g6 to prepare to fianchetto our bishop and initiate the King's Indian setup." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved g6 to prepare, so we move Nc3 to develop our knight and support the e4 pawn push." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Opponent moved Nc3 to develop, so we move Bg7 to complete the fianchetto and place our bishop on a powerful diagonal." },
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Opponent moved Bg7 to fianchetto, so we move e4 to establish a full pawn center and claim significant space." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved e4 to claim space, so we move d6 to prevent White from playing e5 and to support our own e5 break later." },
          { san: 'f3', from: 'f2', to: 'f3', piece: 'wP', color: 'w', hint: 'f3', reason: "Opponent moved d6 to solidify, so we move f3 to initiate the Saemisch Variation, solidifying e4 and preparing for a kingside attack." },
          { san: 'O-O', from: 'e8', to: 'g8', piece: 'bK', color: 'b', hint: 'O-O', reason: "Opponent moved f3 to solidify, so we move O-O to bring our king to safety and activate our rook." },
          { san: 'Be3', from: 'c1', to: 'e3', piece: 'wB', color: 'w', hint: 'Be3', reason: "Opponent moved O-O to castle, so we move Be3 to develop our bishop and prepare for central play or a kingside pawn storm." },
        ]
      },
      {
        name: 'Four Pawns Attack',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved c4 to expand, so we move g6 to prepare to fianchetto our bishop and initiate the King's Indian setup." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved g6 to prepare, so we move Nc3 to develop our knight and support the e4 pawn push." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Opponent moved Nc3 to develop, so we move Bg7 to complete the fianchetto and place our bishop on a powerful diagonal." },
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Opponent moved Bg7 to fianchetto, so we move e4 to establish a full pawn center and claim significant space." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved e4 to claim space, so we move d6 to prevent White from playing e5 and to support our own e5 break later." },
          { san: 'f4', from: 'f2', to: 'f4', piece: 'wP', color: 'w', hint: 'f4', reason: "Opponent moved d6 to solidify, so we move f4 to initiate the Four Pawns Attack, building a massive center and putting immediate pressure on Black's position." },
        ]
      },
      {
        name: 'Fianchetto Variation',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved c4 to expand, so we move g6 to prepare to fianchetto our bishop and initiate the King's Indian setup." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved g6 to prepare, so we move Nf3 to develop our knight and control the center without committing the e-pawn yet." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Opponent moved Nf3 to develop, so we move Bg7 to complete the fianchetto and place our bishop on a powerful diagonal." },
          { san: 'g3', from: 'g2', to: 'g3', piece: 'wP', color: 'w', hint: 'g3', reason: "Opponent moved Bg7 to fianchetto, so we move g3 to initiate the Fianchetto Variation, preparing to fianchetto our own bishop to challenge Black's." },
        ]
      },
      {
        name: 'Averbakh Variation',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved c4 to expand, so we move g6 to prepare to fianchetto our bishop and initiate the King's Indian setup." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved g6 to prepare, so we move Nc3 to develop our knight and support the e4 pawn push." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Opponent moved Nc3 to develop, so we move Bg7 to complete the fianchetto and place our bishop on a powerful diagonal." },
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Opponent moved Bg7 to fianchetto, so we move e4 to establish a full pawn center and claim significant space." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved e4 to claim space, so we move d6 to prevent White from playing e5 and to support our own e5 break later." },
          { san: 'Be2', from: 'f1', to: 'e2', piece: 'wB', color: 'w', hint: 'Be2', reason: "Opponent moved d6 to solidify, so we move Be2 to develop our bishop and prepare for castling." },
          { san: 'O-O', from: 'e8', to: 'g8', piece: 'bK', color: 'b', hint: 'O-O', reason: "Opponent moved Be2 to develop, so we move O-O to bring our king to safety and activate our rook." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved O-O to castle, so we move Bg5 to initiate the Averbakh Variation, pinning the knight on f6 and disrupting Black's typical plans." },
        ]
      },
      {
        name: 'Zinnowitz Variation',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved c4 to expand, so we move g6 to prepare to fianchetto our bishop and initiate the King's Indian setup." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved g6 to prepare, so we move Nc3 to develop our knight and support the e4 pawn push." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Opponent moved Nc3 to develop, so we move Bg7 to complete the fianchetto and place our bishop on a powerful diagonal." },
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Opponent moved Bg7 to fianchetto, so we move e4 to establish a full pawn center and claim significant space." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved e4 to claim space, so we move d6 to prevent White from playing e5 and to support our own e5 break later." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved d6 to solidify, so we move Bg5 to initiate the Zinnowitz Variation, playing Bg5 early to disrupt Black's setup and pin the knight." },
        ]
      }
    ]
  },
  {
    id: 'scotch',
    name: 'Scotch Game',
    icon: '🥃',
    desc: 'Aggressive 1.e4 opening. Open the center immediately with d4.',
    side: 'white',
    difficulty: 2,
    lines: [
      {
        name: 'Main Line',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to mirror their move and establish our own central presence." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to establish presence, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nc6 to defend, so we move d4 to initiate the Scotch Game, opening the center immediately and challenging Black's e5 pawn." },
          { san: 'exd4', from: 'e5', to: 'd4', piece: 'bP', color: 'b', hint: 'exd4', reason: "Opponent moved d4 to challenge, so we move exd4 to accept the exchange and open the center." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Opponent moved exd4 to exchange, so we move Nxd4 to recapture the pawn with our knight and centralize our piece." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nxd4 to centralize, so we move Nf6 to develop our knight and counterattack White's e4 pawn." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Nf6 to counterattack, so we move Nc3 to develop our knight and defend the e4 pawn." },
        ]
      },
      {
        name: 'Classical Variation (4...Bc5)',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to mirror their move and establish our own central presence." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to establish presence, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nc6 to defend, so we move d4 to initiate the Scotch Game, opening the center immediately and challenging Black's e5 pawn." },
          { san: 'exd4', from: 'e5', to: 'd4', piece: 'bP', color: 'b', hint: 'exd4', reason: "Opponent moved d4 to challenge, so we move exd4 to accept the exchange and open the center." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Opponent moved exd4 to exchange, so we move Nxd4 to recapture the pawn with our knight and centralize our piece." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "Opponent moved Nxd4 to centralize, so we move Bc5 to initiate the Classical Variation, developing our bishop to an active square and putting pressure on White's knight." },
        ]
      },
      {
        name: 'Schmidt Variation (4...Nf6)',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to mirror their move and establish our own central presence." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to establish presence, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nc6 to defend, so we move d4 to initiate the Scotch Game, opening the center immediately and challenging Black's e5 pawn." },
          { san: 'exd4', from: 'e5', to: 'd4', piece: 'bP', color: 'b', hint: 'exd4', reason: "Opponent moved d4 to challenge, so we move exd4 to accept the exchange and open the center." },
          { san: 'Nxd4', from: 'f3', to: 'd4', piece: 'wN', color: 'w', hint: 'Nxd4', reason: "Opponent moved exd4 to exchange, so we move Nxd4 to recapture the pawn with our knight and centralize our piece." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nxd4 to centralize, so we move Nf6 to initiate the Schmidt Variation, immediately challenging White's e4 pawn and developing a piece." },
        ]
      },
      {
        name: 'Scotch Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to mirror their move and establish our own central presence." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to establish presence, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nc6 to defend, so we move d4 to initiate the Scotch Game, opening the center immediately and challenging Black's e5 pawn." },
          { san: 'exd4', from: 'e5', to: 'd4', piece: 'bP', color: 'b', hint: 'exd4', reason: "Opponent moved d4 to challenge, so we move exd4 to accept the exchange and open the center." },
          { san: 'Bc4', from: 'f1', to: 'c4', piece: 'wB', color: 'w', hint: 'Bc4', reason: "Opponent moved exd4 to exchange, so we move Bc4 to initiate the Scotch Gambit, delaying the recapture to focus on rapid development and attacking f7." },
        ]
      },
      {
        name: 'Goering Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved e4 to control the center, so we move e5 to mirror their move and establish our own central presence." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved e5 to establish presence, so we move Nf3 to develop our knight and attack the e5 pawn." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nf3 to attack, so we move Nc6 to develop our knight and defend the e5 pawn." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nc6 to defend, so we move d4 to initiate the Scotch Game, opening the center immediately and challenging Black's e5 pawn." },
          { san: 'exd4', from: 'e5', to: 'd4', piece: 'bP', color: 'b', hint: 'exd4', reason: "Opponent moved d4 to challenge, so we move exd4 to accept the exchange and open the center." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "Opponent moved exd4 to exchange, so we move c3 to initiate the Goering Gambit, offering a second pawn to gain a lead in development and open lines." },
        ]
      }
    ]
  },
  {
    id: 'french',
    name: 'French Defense',
    icon: '🇫🇷',
    desc: 'Solid and resilient. Black fights for the center from a closed position.',
    side: 'black',
    difficulty: 2,
    lines: [
      {
        name: 'Advance Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved e4 to control the center, so we move e6 to initiate the French Defense, preparing to challenge White's center with d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved e6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control, so we move d5 to immediately challenge White's central pawn on e4." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "Opponent moved d5 to challenge, so we move e5 to initiate the Advance Variation, gaining space and closing the center." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Opponent moved e5 to close, so we move c5 to strike at the base of White's pawn chain and challenge d4." },
          { san: 'c3', from: 'c2', to: 'c3', piece: 'wP', color: 'w', hint: 'c3', reason: "Opponent moved c5 to strike, so we move c3 to solidify our d4 pawn and maintain our central structure." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved c3 to solidify, so we move Nc6 to develop our knight and increase pressure on the d4 pawn." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved Nc6 to pressure, so we move Nf3 to develop our knight and provide additional defense for d4." },
        ]
      },
      {
        name: 'Exchange Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved e4 to control the center, so we move e6 to initiate the French Defense, preparing to challenge White's center with d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved e6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control, so we move d5 to immediately challenge White's central pawn on e4." },
          { san: 'exd5', from: 'e4', to: 'd5', piece: 'wP', color: 'w', hint: 'exd5', reason: "Opponent moved d5 to challenge, so we move exd5 to initiate the Exchange Variation, opening the game immediately and simplifying the structure." },
          { san: 'exd5', from: 'e6', to: 'd5', piece: 'bP', color: 'b', hint: 'exd5', reason: "Opponent moved exd5 to open, so we move exd5 to recapture the pawn and maintain a balanced central position." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved exd5 to recapture, so we move Nf3 to develop our knight and control the center." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nf3 to develop, so we move Nf6 to develop our knight and prepare for further central play." },
        ]
      },
      {
        name: 'Winawer Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved e4 to control the center, so we move e6 to initiate the French Defense, preparing to challenge White's center with d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved e6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control, so we move d5 to immediately challenge White's central pawn on e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn while preparing for further development." },
          { san: 'Bb4', from: 'f8', to: 'b4', piece: 'bB', color: 'b', hint: 'Bb4', reason: "Opponent moved Nc3 to defend, so we move Bb4 to initiate the Winawer Variation, pinning the knight and preparing to trade it to disrupt White's structure." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "Opponent moved Bb4 to pin, so we move e5 to gain space in the center and close the position." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Opponent moved e5 to close, so we move c5 to strike at the base of White's pawn chain and challenge d4." },
          { san: 'a3', from: 'a2', to: 'a3', piece: 'wP', color: 'w', hint: 'a3', reason: "Opponent moved c5 to strike, so we move a3 to challenge the pinned bishop and force Black to make a decision." },
          { san: 'Bxc3+', from: 'b4', to: 'c3', piece: 'bB', color: 'b', hint: 'Bxc3+', reason: "Opponent moved a3 to challenge, so we move Bxc3+ to trade our bishop for the knight and deliver a check, disrupting White's pawn structure." },
          { san: 'bxc3', from: 'b2', to: 'c3', piece: 'wP', color: 'w', hint: 'bxc3', reason: "Opponent moved Bxc3+ to trade, so we move bxc3 to recapture the piece, accepting doubled pawns in exchange for the bishop pair and central control." },
        ]
      },
      {
        name: 'Tarrasch Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved e4 to control the center, so we move e6 to initiate the French Defense, preparing to challenge White's center with d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved e6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control, so we move d5 to immediately challenge White's central pawn on e4." },
          { san: 'Nd2', from: 'b1', to: 'd2', piece: 'wN', color: 'w', hint: 'Nd2', reason: "Opponent moved d5 to challenge, so we move Nd2 to initiate the Tarrasch Variation, developing our knight while avoiding the Winawer pin and keeping the c-pawn free." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Opponent moved Nd2 to develop, so we move c5 to immediately challenge White's central control and strike at d4." },
        ]
      },
      {
        name: 'Classical Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved e4 to control the center, so we move e6 to initiate the French Defense, preparing to challenge White's center with d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved e6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control, so we move d5 to immediately challenge White's central pawn on e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn while preparing for further development." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nc3 to defend, so we move Nf6 to initiate the Classical Variation, developing our knight and putting immediate pressure on White's e4 pawn." },
        ]
      },
      {
        name: 'Rubinstein Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved e4 to control the center, so we move e6 to initiate the French Defense, preparing to challenge White's center with d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved e6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control, so we move d5 to immediately challenge White's central pawn on e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn while preparing for further development." },
          { san: 'dxe4', from: 'd5', to: 'e4', piece: 'bP', color: 'b', hint: 'dxe4', reason: "Opponent moved Nc3 to defend, so we move dxe4 to initiate the Rubinstein Variation, simplifying the center and avoiding sharp theoretical lines." },
          { san: 'Nxe4', from: 'c3', to: 'e4', piece: 'wN', color: 'w', hint: 'Nxe4', reason: "Opponent moved dxe4 to simplify, so we move Nxe4 to recapture the pawn and centralize our knight." },
        ]
      },
      {
        name: 'Fort Knox Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved e4 to control the center, so we move e6 to initiate the French Defense, preparing to challenge White's center with d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved e6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control, so we move d5 to immediately challenge White's central pawn on e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn while preparing for further development." },
          { san: 'dxe4', from: 'd5', to: 'e4', piece: 'bP', color: 'b', hint: 'dxe4', reason: "Opponent moved Nc3 to defend, so we move dxe4 to simplify the center and initiate the Rubinstein setup." },
          { san: 'Nxe4', from: 'c3', to: 'e4', piece: 'wN', color: 'w', hint: 'Nxe4', reason: "Opponent moved dxe4 to simplify, so we move Nxe4 to recapture the pawn and centralize our knight." },
          { san: 'Bd7', from: 'c8', to: 'd7', piece: 'bB', color: 'b', hint: 'Bd7', reason: "Opponent moved Nxe4 to recapture, so we move Bd7 to initiate the Fort Knox Variation, preparing to trade our light-squared bishop for a knight to solidify our position." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved Bd7 to prepare, so we move Nf3 to develop our knight and control the center." },
          { san: 'Bc6', from: 'd7', to: 'c6', piece: 'bB', color: 'b', hint: 'Bc6', reason: "Opponent moved Nf3 to develop, so we move Bc6 to place our bishop on the long diagonal and challenge White's centralized knight." },
        ]
      },
      {
        name: 'Burn Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved e4 to control the center, so we move e6 to initiate the French Defense, preparing to challenge White's center with d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved e6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control, so we move d5 to immediately challenge White's central pawn on e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn while preparing for further development." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nc3 to defend, so we move Nf6 to develop our knight and put immediate pressure on White's e4 pawn." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved Nf6 to develop, so we move Bg5 to pin the knight and increase pressure on Black's position." },
          { san: 'dxe4', from: 'd5', to: 'e4', piece: 'bP', color: 'b', hint: 'dxe4', reason: "Opponent moved Bg5 to pin, so we move dxe4 to initiate the Burn Variation, simplifying the center immediately to resolve the tension." },
        ]
      },
      {
        name: 'MacCutcheon Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved e4 to control the center, so we move e6 to initiate the French Defense, preparing to challenge White's center with d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved e6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control, so we move d5 to immediately challenge White's central pawn on e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn while preparing for further development." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nc3 to defend, so we move Nf6 to develop our knight and put immediate pressure on White's e4 pawn." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved Nf6 to develop, so we move Bg5 to pin the knight and increase pressure on Black's position." },
          { san: 'Bb4', from: 'f8', to: 'b4', piece: 'bB', color: 'b', hint: 'Bb4', reason: "Opponent moved Bg5 to pin, so we move Bb4 to initiate the MacCutcheon Variation, counter-pinning White's knight on c3 and creating complex tactical possibilities." },
        ]
      },
      {
        name: 'Steinitz Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved e4 to control the center, so we move e6 to initiate the French Defense, preparing to challenge White's center with d5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved e6 to prepare, so we move d4 to establish a strong pawn center and control key squares." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved d4 to control, so we move d5 to immediately challenge White's central pawn on e4." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved d5 to challenge, so we move Nc3 to develop our knight and defend the e4 pawn while preparing for further development." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nc3 to defend, so we move Nf6 to develop our knight and put immediate pressure on White's e4 pawn." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "Opponent moved Nf6 to develop, so we move e5 to initiate the Steinitz Variation, gaining space and forcing Black's knight to retreat." },
          { san: 'Nfd7', from: 'f6', to: 'd7', piece: 'bN', color: 'b', hint: 'Nfd7', reason: "Opponent moved e5 to gain space, so we move Nfd7 to retreat our knight to a safe square while maintaining central influence." },
          { san: 'f4', from: 'f2', to: 'f4', piece: 'wP', color: 'w', hint: 'f4', reason: "Opponent moved Nfd7 to retreat, so we move f4 to solidify our central pawn chain and prepare for further expansion." },
        ]
      }
    ]
  },
  {
    id: 'nimzo-indian',
    name: 'Nimzo-Indian Defense',
    icon: '🐘',
    desc: 'Hypermodern defense. Control the center with pieces and pins.',
    side: 'black',
    difficulty: 3,
    lines: [
      {
        name: 'Classical Variation',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved c4 to expand, so we move e6 to prepare for d5 or Bb4 while opening lines for our dark-squared bishop." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved e6 to prepare, so we move Nc3 to develop our knight and support the e4 pawn push." },
          { san: 'Bb4', from: 'f8', to: 'b4', piece: 'bB', color: 'b', hint: 'Bb4', reason: "Opponent moved Nc3 to develop, so we move Bb4 to pin the knight and challenge White's control of the e4 square." },
          { san: 'Qc2', from: 'd1', to: 'c2', piece: 'wP', color: 'w', hint: 'Qc2', reason: "Opponent moved Bb4 to pin, so we move Qc2 to initiate the Classical Variation, avoiding doubled pawns and defending c3." },
          { san: 'O-O', from: 'e8', to: 'g8', piece: 'bK', color: 'b', hint: 'O-O', reason: "Opponent moved Qc2 to defend, so we move O-O to bring our king to safety and activate our rook." },
          { san: 'a3', from: 'a2', to: 'a3', piece: 'wP', color: 'w', hint: 'a3', reason: "Opponent moved O-O to castle, so we move a3 to challenge the bishop and force Black to make a decision about the pin." },
          { san: 'Bxc3+', from: 'b4', to: 'c3', piece: 'bB', color: 'b', hint: 'Bxc3+', reason: "Opponent moved a3 to challenge, so we move Bxc3+ to trade our bishop for the knight and create doubled pawns for White." },
          { san: 'Qxc3', from: 'c2', to: 'c3', piece: 'wQ', color: 'w', hint: 'Qxc3', reason: "Opponent moved Bxc3+ to trade, so we move Qxc3 to recapture with the queen and maintain a solid pawn structure." },
        ]
      },
      {
        name: 'Rubinstein Variation (4.e3)',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved c4 to expand, so we move e6 to prepare for d5 or Bb4 while opening lines for our dark-squared bishop." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved e6 to prepare, so we move Nc3 to develop our knight and support the e4 pawn push." },
          { san: 'Bb4', from: 'f8', to: 'b4', piece: 'bB', color: 'b', hint: 'Bb4', reason: "Opponent moved Nc3 to develop, so we move Bb4 to pin the knight and challenge White's control of the e4 square." },
          { san: 'e3', from: 'e2', to: 'e3', piece: 'wP', color: 'w', hint: 'e3', reason: "Opponent moved Bb4 to pin, so we move e3 to initiate the Rubinstein Variation, solidifying the center and preparing for development." },
        ]
      },
      {
        name: 'Kasparov Variation (4.Nf3)',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved c4 to expand, so we move e6 to prepare for d5 or Bb4 while opening lines for our dark-squared bishop." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved e6 to prepare, so we move Nc3 to develop our knight and support the e4 pawn push." },
          { san: 'Bb4', from: 'f8', to: 'b4', piece: 'bB', color: 'b', hint: 'Bb4', reason: "Opponent moved Nc3 to develop, so we move Bb4 to pin the knight and challenge White's control of the e4 square." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved Bb4 to pin, so we move Nf3 to initiate the Kasparov Variation, developing naturally and controlling the center." },
        ]
      },
      {
        name: 'Leningrad Variation (4.Bg5)',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved c4 to expand, so we move e6 to prepare for d5 or Bb4 while opening lines for our dark-squared bishop." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved e6 to prepare, so we move Nc3 to develop our knight and support the e4 pawn push." },
          { san: 'Bb4', from: 'f8', to: 'b4', piece: 'bB', color: 'b', hint: 'Bb4', reason: "Opponent moved Nc3 to develop, so we move Bb4 to pin the knight and challenge White's control of the e4 square." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved Bb4 to pin, so we move Bg5 to initiate the Leningrad Variation, pinning the knight on f6 and creating pressure." },
        ]
      }
    ]
  },
  {
    id: 'grunfeld',
    name: 'Grunfeld Defense',
    icon: '🌪️',
    desc: 'Dynamic hypermodern defense. Challenge White center with ...d5.',
    side: 'black',
    difficulty: 3,
    lines: [
      {
        name: 'Exchange Variation',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved c4 to expand, so we move g6 to prepare to fianchetto our bishop and initiate the Grunfeld setup." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved g6 to prepare, so we move Nc3 to develop our knight and support the e4 pawn push." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Nc3 to develop, so we move d5 to initiate the Grunfeld Defense, striking at the center immediately." },
          { san: 'cxd5', from: 'c4', to: 'd5', piece: 'wP', color: 'w', hint: 'cxd5', reason: "Opponent moved d5 to strike, so we move cxd5 to capture the pawn and challenge Black's central presence." },
          { san: 'Nxd5', from: 'f6', to: 'd5', piece: 'bN', color: 'b', hint: 'Nxd5', reason: "Opponent moved cxd5 to capture, so we move Nxd5 to recapture and maintain a strong knight in the center." },
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Opponent moved Nxd5 to recapture, so we move e4 to claim the center and attack the knight on d5." },
          { san: 'Nxc3', from: 'd5', to: 'c3', piece: 'bN', color: 'b', hint: 'Nxc3', reason: "Opponent moved e4 to attack, so we move Nxc3 to trade our knight and disrupt White's pawn structure." },
          { san: 'bxc3', from: 'b2', to: 'c3', piece: 'wP', color: 'w', hint: 'bxc3', reason: "Opponent moved Nxc3 to trade, so we move bxc3 to recapture and build a massive pawn center." },
        ]
      },
      {
        name: 'Russian System (4.Nf3 Bg7 5.Qb3)',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved c4 to expand, so we move g6 to prepare to fianchetto our bishop and initiate the Grunfeld setup." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved g6 to prepare, so we move Nc3 to develop our knight and support the e4 pawn push." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Nc3 to develop, so we move d5 to initiate the Grunfeld Defense, striking at the center immediately." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved d5 to strike, so we move Nf3 to develop our knight and control the center." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Opponent moved Nf3 to develop, so we move Bg7 to complete our fianchetto and place our bishop on a powerful diagonal." },
          { san: 'Qb3', from: 'd1', to: 'b3', piece: 'wQ', color: 'w', hint: 'Qb3', reason: "Opponent moved Bg7 to fianchetto, so we move Qb3 to initiate the Russian System, pressuring d5 with the queen." },
        ]
      },
      {
        name: 'Taimanov Variation (5.Bg5)',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved c4 to expand, so we move g6 to prepare to fianchetto our bishop and initiate the Grunfeld setup." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved g6 to prepare, so we move Nc3 to develop our knight and support the e4 pawn push." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Nc3 to develop, so we move d5 to initiate the Grunfeld Defense, striking at the center immediately." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved d5 to strike, so we move Bg5 to initiate the Taimanov Variation, pinning the knight on f6 and creating pressure." },
        ]
      }
    ]
  },
  {
    id: 'dutch',
    name: 'Dutch Defense',
    icon: '🇳🇱',
    desc: 'Aggressive and imbalanced. Fight for the center with ...f5.',
    side: 'black',
    difficulty: 3,
    lines: [
      {
        name: 'Leningrad Variation',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'f5', from: 'f7', to: 'f5', piece: 'bP', color: 'b', hint: 'f5', reason: "Opponent moved d4 to control the center, so we move f5 to initiate the Dutch Defense, controlling e4 from the flank." },
          { san: 'g3', from: 'g2', to: 'g3', piece: 'wP', color: 'w', hint: 'g3', reason: "Opponent moved f5 to control e4, so we move g3 to prepare to fianchetto our bishop and control the long diagonal." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved g3 to prepare, so we move Nf6 to develop our knight and control the e4 square." },
          { san: 'Bg2', from: 'f1', to: 'g2', piece: 'wB', color: 'w', hint: 'Bg2', reason: "Opponent moved Nf6 to develop, so we move Bg2 to complete our fianchetto and place our bishop on a powerful diagonal." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved Bg2 to fianchetto, so we move g6 to initiate the Leningrad setup, preparing to fianchetto our own bishop." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved g6 to prepare, so we move Nf3 to develop our knight and control the center." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Opponent moved Nf3 to develop, so we move Bg7 to complete our fianchetto and place our bishop on a powerful diagonal." },
          { san: 'O-O', from: 'e1', to: 'g1', piece: 'wK', color: 'w', hint: 'O-O', reason: "Opponent moved Bg7 to fianchetto, so we move O-O to bring our king to safety and activate our rook." },
          { san: 'O-O', from: 'e8', to: 'g8', piece: 'bK', color: 'b', hint: 'O-O', reason: "Opponent moved O-O to castle, so we move O-O to bring our king to safety and activate our rook." },
        ]
      },
      {
        name: 'Classical Variation',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'f5', from: 'f7', to: 'f5', piece: 'bP', color: 'b', hint: 'f5', reason: "Opponent moved d4 to control the center, so we move f5 to initiate the Dutch Defense, controlling e4 from the flank." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved f5 to control e4, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved c4 to expand, so we move Nf6 to develop our knight and control the e4 square." },
          { san: 'g3', from: 'g2', to: 'g3', piece: 'wP', color: 'w', hint: 'g3', reason: "Opponent moved Nf6 to develop, so we move g3 to prepare to fianchetto our bishop and control the long diagonal." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved g3 to prepare, so we move e6 to initiate the Classical Variation, preparing development and controlling e5." },
        ]
      },
      {
        name: 'Stonewall Variation',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'f5', from: 'f7', to: 'f5', piece: 'bP', color: 'b', hint: 'f5', reason: "Opponent moved d4 to control the center, so we move f5 to initiate the Dutch Defense, controlling e4 from the flank." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved f5 to control e4, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved c4 to expand, so we move Nf6 to develop our knight and control the e4 square." },
          { san: 'g3', from: 'g2', to: 'g3', piece: 'wP', color: 'w', hint: 'g3', reason: "Opponent moved Nf6 to develop, so we move g3 to prepare to fianchetto our bishop and control the long diagonal." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved g3 to prepare, so we move e6 to prepare for d5 and solidify our central control." },
          { san: 'Bg2', from: 'f1', to: 'g2', piece: 'wB', color: 'w', hint: 'Bg2', reason: "Opponent moved e6 to prepare, so we move Bg2 to complete our fianchetto and place our bishop on a powerful diagonal." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Opponent moved Bg2 to fianchetto, so we move d5 to initiate the Stonewall Variation, creating a solid pawn chain and controlling the center." },
        ]
      },
      {
        name: 'Staunton Gambit',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'f5', from: 'f7', to: 'f5', piece: 'bP', color: 'b', hint: 'f5', reason: "Opponent moved d4 to control the center, so we move f5 to initiate the Dutch Defense, controlling e4 from the flank." },
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Opponent moved f5 to control e4, so we move e4 to initiate the Staunton Gambit, immediately challenging the f5 pawn with a sacrifice." },
          { san: 'fxe4', from: 'f5', to: 'e4', piece: 'bP', color: 'b', hint: 'fxe4', reason: "Opponent moved e4 to challenge, so we move fxe4 to accept the gambit and gain a central pawn." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved fxe4 to accept, so we move Nc3 to develop our knight and attack the e4 pawn." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved Nc3 to develop, so we move Nf6 to develop our knight and defend the e4 pawn." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved Nf6 to develop, so we move Bg5 to pin the knight and create pressure on Black's position." },
        ]
      }
    ]
  },

  {
    id: 'pirc',
    name: 'Pirc Defense',
    icon: '🏔️',
    desc: 'Hypermodern defense. Black allows White a center and attacks it later.',
    side: 'black',
    difficulty: 3,
    lines: [
      {
        name: 'Classical Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved e4 to control the center, so we move d6 to initiate the Pirc Defense, preparing for development and controlling e5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved d6 to prepare, so we move d4 to establish a full pawn center and claim significant space." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to claim space, so we move Nf6 to develop our knight and attack the e4 pawn." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Nf6 to attack, so we move Nc3 to develop our knight and defend the e4 pawn." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved Nc3 to develop, so we move g6 to prepare to fianchetto our bishop and control the long diagonal." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved g6 to prepare, so we move Nf3 to initiate the Classical Variation, developing naturally and controlling the center." },
        ]
      },
      {
        name: 'Austrian Attack (4.f4)',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved e4 to control the center, so we move d6 to initiate the Pirc Defense, preparing for development and controlling e5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved d6 to prepare, so we move d4 to establish a full pawn center and claim significant space." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to claim space, so we move Nf6 to develop our knight and attack the e4 pawn." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Nf6 to attack, so we move Nc3 to develop our knight and defend the e4 pawn." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved Nc3 to develop, so we move g6 to prepare to fianchetto our bishop and control the long diagonal." },
          { san: 'f4', from: 'f2', to: 'f4', piece: 'wP', color: 'w', hint: 'f4', reason: "Opponent moved g6 to prepare, so we move f4 to initiate the Austrian Attack, building a massive pawn center and preparing for an aggressive attack." },
        ]
      },
      {
        name: '150 Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved e4 to control the center, so we move d6 to initiate the Pirc Defense, preparing for development and controlling e5." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved d6 to prepare, so we move d4 to establish a full pawn center and claim significant space." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to claim space, so we move Nf6 to develop our knight and attack the e4 pawn." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Nf6 to attack, so we move Nc3 to develop our knight and defend the e4 pawn." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved Nc3 to develop, so we move g6 to prepare to fianchetto our bishop and control the long diagonal." },
          { san: 'Be3', from: 'c1', to: 'e3', piece: 'wB', color: 'w', hint: 'Be3', reason: "Opponent moved g6 to prepare, so we move Be3 to initiate the 150 Attack, preparing a kingside battery and controlling the center." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Opponent moved Be3 to prepare, so we move Bg7 to complete our fianchetto and place our bishop on a powerful diagonal." },
          { san: 'Qd2', from: 'd1', to: 'd2', piece: 'wQ', color: 'w', hint: 'Qd2', reason: "Opponent moved Bg7 to fianchetto, so we move Qd2 to complete the battery and prepare for a kingside attack." },
        ]
      }
    ]
  },
  {
    id: 'alekhine',
    name: "Alekhine's Defense",
    icon: '🐎',
    desc: 'Provocative defense. Black lures White pawns forward to attack them later.',
    side: 'black',
    difficulty: 3,
    lines: [
      {
        name: 'Four Pawns Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved e4 to control the center, so we move Nf6 to initiate the Alekhine's Defense, attacking the e4 pawn immediately." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "Opponent moved Nf6 to attack, so we move e5 to kick the knight and gain space in the center." },
          { san: 'Nd5', from: 'f6', to: 'd5', piece: 'bN', color: 'b', hint: 'Nd5', reason: "Opponent moved e5 to kick, so we move Nd5 to place our knight on a central post and challenge White's space." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nd5 to centralize, so we move d4 to solidify our center and support the e5 pawn." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved d4 to solidify, so we move d6 to challenge White's central pawn and create counterplay." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d6 to challenge, so we move c4 to kick the knight again and further expand our central control." },
          { san: 'Nb6', from: 'd5', to: 'b6', piece: 'bN', color: 'b', hint: 'Nb6', reason: "Opponent moved c4 to kick, so we move Nb6 to retreat our knight to a safe square while maintaining pressure." },
          { san: 'f4', from: 'f2', to: 'f4', piece: 'wP', color: 'w', hint: 'f4', reason: "Opponent moved Nb6 to retreat, so we move f4 to initiate the Four Pawns Attack, building a massive pawn center." },
        ]
      },
      {
        name: 'Exchange Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved e4 to control the center, so we move Nf6 to initiate the Alekhine's Defense, attacking the e4 pawn immediately." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "Opponent moved Nf6 to attack, so we move e5 to kick the knight and gain space in the center." },
          { san: 'Nd5', from: 'f6', to: 'd5', piece: 'bN', color: 'b', hint: 'Nd5', reason: "Opponent moved e5 to kick, so we move Nd5 to place our knight on a central post and challenge White's space." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nd5 to centralize, so we move d4 to solidify our center and support the e5 pawn." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved d4 to solidify, so we move d6 to challenge White's central pawn and create counterplay." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d6 to challenge, so we move c4 to kick the knight again and further expand our central control." },
          { san: 'Nb6', from: 'd5', to: 'b6', piece: 'bN', color: 'b', hint: 'Nb6', reason: "Opponent moved c4 to kick, so we move Nb6 to retreat our knight to a safe square while maintaining pressure." },
          { san: 'exd6', from: 'e5', to: 'd6', piece: 'wP', color: 'w', hint: 'exd6', reason: "Opponent moved Nb6 to retreat, so we move exd6 to initiate the Exchange Variation, simplifying the center and maintaining a space advantage." },
        ]
      },
      {
        name: 'Modern Variation (4.Nf3)',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved e4 to control the center, so we move Nf6 to initiate the Alekhine's Defense, attacking the e4 pawn immediately." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "Opponent moved Nf6 to attack, so we move e5 to kick the knight and gain space in the center." },
          { san: 'Nd5', from: 'f6', to: 'd5', piece: 'bN', color: 'b', hint: 'Nd5', reason: "Opponent moved e5 to kick, so we move Nd5 to place our knight on a central post and challenge White's space." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nd5 to centralize, so we move d4 to solidify our center and support the e5 pawn." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved d4 to solidify, so we move d6 to challenge White's central pawn and create counterplay." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved d6 to challenge, so we move Nf3 to initiate the Modern Variation, developing naturally and controlling the center." },
        ]
      },
      {
        name: 'Four Pawns Attack',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Starting the game, we move e4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved e4 to control the center, so we move Nf6 to initiate the Alekhine's Defense, attacking the e4 pawn immediately." },
          { san: 'e5', from: 'e4', to: 'e5', piece: 'wP', color: 'w', hint: 'e5', reason: "Opponent moved Nf6 to attack, so we move e5 to kick the knight and gain space in the center." },
          { san: 'Nd5', from: 'f6', to: 'd5', piece: 'bN', color: 'b', hint: 'Nd5', reason: "Opponent moved e5 to kick, so we move Nd5 to place our knight on a central post and challenge White's space." },
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Opponent moved Nd5 to centralize, so we move d4 to solidify our center and support the e5 pawn." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved d4 to solidify, so we move d6 to challenge White's central pawn and create counterplay." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved d6 to challenge, so we move c4 to kick the knight again and further expand our central control." },
          { san: 'Nb6', from: 'd5', to: 'b6', piece: 'bN', color: 'b', hint: 'Nb6', reason: "Opponent moved c4 to kick, so we move Nb6 to retreat our knight to a safe square while maintaining pressure." },
          { san: 'f4', from: 'f2', to: 'f4', piece: 'wP', color: 'w', hint: 'f4', reason: "Opponent moved Nb6 to retreat, so we move f4 to initiate the Four Pawns Attack, building a massive pawn center." },
        ]
      }
    ]
  },
  {
    id: 'benoni',
    name: 'Benoni Defense',
    icon: '🦂',
    desc: 'Dynamic and unbalanced. Black challenges White center with ...c5.',
    side: 'black',
    difficulty: 3,
    lines: [
      {
        name: 'Modern Benoni',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Opponent moved c4 to expand, so we move c5 to initiate the Benoni Defense, challenging the d4 pawn immediately." },
          { san: 'd5', from: 'd4', to: 'd5', piece: 'wP', color: 'w', hint: 'd5', reason: "Opponent moved c5 to challenge, so we move d5 to push forward and maintain a space advantage in the center." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved d5 to push, so we move e6 to challenge the d5 pawn and prepare for development." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved e6 to challenge, so we move Nc3 to develop our knight and support the d5 pawn." },
          { san: 'exd5', from: 'e6', to: 'd5', piece: 'bP', color: 'b', hint: 'exd5', reason: "Opponent moved Nc3 to develop, so we move exd5 to capture the d5 pawn and open the center." },
          { san: 'cxd5', from: 'c4', to: 'd5', piece: 'wP', color: 'w', hint: 'cxd5', reason: "Opponent moved exd5 to capture, so we move cxd5 to recapture and maintain our central pawn presence." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved cxd5 to recapture, so we move d6 to initiate the Modern Benoni structure, controlling the center and preparing for counterplay." },
        ]
      },
      {
        name: 'Czech Benoni',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Opponent moved c4 to expand, so we move c5 to initiate the Benoni Defense, challenging the d4 pawn immediately." },
          { san: 'd5', from: 'd4', to: 'd5', piece: 'wP', color: 'w', hint: 'd5', reason: "Opponent moved c5 to challenge, so we move d5 to push forward and maintain a space advantage in the center." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Opponent moved d5 to push, so we move e5 to initiate the Czech Benoni, locking the center and preparing for a strategic battle." },
        ]
      },
      {
        name: 'Modern Main Line',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Opponent moved Nf6 to develop, so we move c4 to expand our central control and prepare to develop our knight to c3." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Opponent moved c4 to expand, so we move c5 to initiate the Benoni Defense, challenging the d4 pawn immediately." },
          { san: 'd5', from: 'd4', to: 'd5', piece: 'wP', color: 'w', hint: 'd5', reason: "Opponent moved c5 to challenge, so we move d5 to push forward and maintain a space advantage in the center." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved d5 to push, so we move e6 to challenge the d5 pawn and prepare for development." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved e6 to challenge, so we move Nc3 to develop our knight and support the d5 pawn." },
          { san: 'exd5', from: 'e6', to: 'd5', piece: 'bP', color: 'b', hint: 'exd5', reason: "Opponent moved Nc3 to develop, so we move exd5 to capture the d5 pawn and open the center." },
          { san: 'cxd5', from: 'c4', to: 'd5', piece: 'wP', color: 'w', hint: 'cxd5', reason: "Opponent moved exd5 to capture, so we move cxd5 to recapture and maintain our central pawn presence." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Opponent moved cxd5 to recapture, so we move d6 to initiate the Modern Benoni structure, controlling the center and preparing for counterplay." },
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "Opponent moved d6 to solidify, so we move e4 to initiate the Modern Main Line, taking full control of the center and preparing for development." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved e4 to claim space, so we move g6 to prepare to fianchetto our bishop and control the long diagonal." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Opponent moved g6 to prepare, so we move Nf3 to develop our knight and control the center." },
          { san: 'Bg7', from: 'f8', to: 'g7', piece: 'bB', color: 'b', hint: 'Bg7', reason: "Opponent moved Nf3 to develop, so we move Bg7 to complete our fianchetto and place our bishop on a powerful diagonal." },
          { san: 'Be2', from: 'f1', to: 'e2', piece: 'wB', color: 'w', hint: 'Be2', reason: "Opponent moved Bg7 to fianchetto, so we move Be2 to develop our bishop and prepare for castling." },
        ]
      }
    ]
  },
  {
    id: 'trompowsky',
    name: 'Trompowsky Attack',
    icon: '🏹',
    desc: 'Aggressive and offbeat. White attacks the knight on f6 immediately.',
    side: 'white',
    difficulty: 2,
    lines: [
      {
        name: 'Main Line',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved Nf6 to develop, so we move Bg5 to initiate the Trompowsky Attack, pinning the knight and creating immediate pressure." },
        ]
      },
      {
        name: 'Classical Variation (2...e6)',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved Nf6 to develop, so we move Bg5 to initiate the Trompowsky Attack, pinning the knight and creating immediate pressure." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved Bg5 to pin, so we move e6 to challenge the bishop and prepare for development." },
        ]
      },
      {
        name: '2...Ne4',
        moves: [
          { san: 'd4', from: 'd2', to: 'd4', piece: 'wP', color: 'w', hint: 'd4', reason: "Starting the game, we move d4 to control the center and open lines for our queen and bishop." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved d4 to control the center, so we move Nf6 to develop our knight and prevent White from immediately playing e4." },
          { san: 'Bg5', from: 'c1', to: 'g5', piece: 'wB', color: 'w', hint: 'Bg5', reason: "Opponent moved Nf6 to develop, so we move Bg5 to initiate the Trompowsky Attack, pinning the knight and creating immediate pressure." },
          { san: 'Ne4', from: 'f6', to: 'e4', piece: 'bN', color: 'b', hint: 'Ne4', reason: "Opponent moved Bg5 to pin, so we move Ne4 to attack the bishop and challenge White's aggressive setup." },
        ]
      }
    ]
  },
  {
    id: 'english-opening',
    name: 'English Opening',
    icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    desc: 'Flank opening. White controls d5 from the side, leading to strategic battles.',
    side: 'white',
    difficulty: 2,
    lines: [
      {
        name: 'Symmetrical Variation',
        moves: [
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Starting the game, we move c4 to control the d5 square from the flank and prepare for a strategic battle." },
          { san: 'c5', from: 'c7', to: 'c5', piece: 'bP', color: 'b', hint: 'c5', reason: "Opponent moved c4 to control d5, so we move c5 to respond symmetrically and challenge White's control of the center." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved c5 to respond, so we move Nc3 to develop our knight and increase pressure on the d5 square." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "Opponent moved Nc3 to develop, so we move Nc6 to develop our knight and maintain the symmetrical balance." },
          { san: 'g3', from: 'g2', to: 'g3', piece: 'wP', color: 'w', hint: 'g3', reason: "Opponent moved Nc6 to develop, so we move g3 to prepare to fianchetto our bishop and control the long diagonal." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Opponent moved g3 to prepare, so we move g6 to also prepare for a fianchetto and maintain the symmetry." },
        ]
      },
      {
        name: 'Anglo-Indian Defense',
        moves: [
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "Starting the game, we move c4 to control the d5 square from the flank and prepare for a strategic battle." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Opponent moved c4 to control d5, so we move Nf6 to develop our knight and keep our options open for various setups." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Opponent moved Nf6 to develop, so we move Nc3 to develop our knight and increase pressure on the d5 square." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Opponent moved Nc3 to develop, so we move e6 to prepare for d5 or Bb4, challenging White's setup." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Bb4', from: 'f8', to: 'b4', piece: 'bB', color: 'b', hint: 'Bb4', reason: "Black pins the knight, similar to the Nimzo-Indian." },
        ]
      },
      {
        name: 'Four Knights Variation',
        moves: [
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "English." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "King's English." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Develop knight." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Develop knight." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nc6', from: 'b8', to: 'c6', piece: 'bN', color: 'b', hint: 'Nc6', reason: "The Four Knights! A solid and classical development for both sides." },
        ]
      }
    ]
  },
  {
    id: 'reti-opening',
    name: 'Reti Opening',
    icon: '♟️',
    desc: 'Hypermodern opening. White develops the knight first and attacks the center from the flanks.',
    side: 'white',
    difficulty: 2,
    lines: [
      {
        name: 'Main Line',
        moves: [
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "The Reti! Develop the knight first." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Black claims the center." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "White challenges d5 from the flank." },
          { san: 'e6', from: 'e7', to: 'e6', piece: 'bP', color: 'b', hint: 'e6', reason: "Black supports d5." },
          { san: 'g3', from: 'g2', to: 'g3', piece: 'wP', color: 'w', hint: 'g3', reason: "Prepare to fianchetto." },
        ]
      },
      {
        name: 'Reti Gambit (2.c4 dxc4)',
        moves: [
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Reti." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Black claims center." },
          { san: 'c4', from: 'c2', to: 'c4', piece: 'wP', color: 'w', hint: 'c4', reason: "White gambits the c-pawn." },
          { san: 'dxc4', from: 'd5', to: 'c4', piece: 'bP', color: 'b', hint: 'dxc4', reason: "Black accepts." },
        ]
      }
    ]
  },
  {
    id: 'kings-gambit',
    name: "King's Gambit",
    icon: '🔥',
    desc: 'Romantic era opening. Sacrifice a pawn for a massive attack on the kingside.',
    side: 'white',
    difficulty: 3,
    lines: [
      {
        name: 'Accepted',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Black responds." },
          { san: 'f4', from: 'f2', to: 'f4', piece: 'wP', color: 'w', hint: 'f4', reason: "The King's Gambit! Sacrifice the f-pawn." },
          { san: 'exf4', from: 'e5', to: 'f4', piece: 'bP', color: 'b', hint: 'exf4', reason: "Black accepts." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight and prevent Qh4+." },
          { san: 'g5', from: 'g7', to: 'g5', piece: 'bP', color: 'b', hint: 'g5', reason: "Black defends the pawn." },
        ]
      },
      {
        name: 'Declined (2...Bc5)',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Black responds." },
          { san: 'f4', from: 'f2', to: 'f4', piece: 'wP', color: 'w', hint: 'f4', reason: "King's Gambit." },
          { san: 'Bc5', from: 'f8', to: 'c5', piece: 'bB', color: 'b', hint: 'Bc5', reason: "The Declined! Black develops and prevents castling." },
        ]
      },
      {
        name: 'Falkbeer Countergambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Black responds." },
          { san: 'f4', from: 'f2', to: 'f4', piece: 'wP', color: 'w', hint: 'f4', reason: "King's Gambit." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "The Falkbeer Countergambit! Black strikes back in the center." },
        ]
      }
    ]
  },
  {
    id: 'vienna',
    name: 'Vienna Game',
    icon: '🎻',
    desc: 'Aggressive alternative to the Ruy Lopez. White develops the knight to c3.',
    side: 'white',
    difficulty: 2,
    lines: [
      {
        name: 'Vienna Gambit',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Black responds." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "The Vienna! White develops the knight to c3, keeping the f-pawn free." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Black develops." },
          { san: 'f4', from: 'f2', to: 'f4', piece: 'wP', color: 'w', hint: 'f4', reason: "The Vienna Gambit! White challenges the center immediately." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Black counterattacks d4." },
          { san: 'fxe5', from: 'f4', to: 'e5', piece: 'wP', color: 'w', hint: 'fxe5', reason: "White takes e5." },
          { san: 'Nxe4', from: 'f6', to: 'e4', piece: 'bN', color: 'b', hint: 'Nxe4', reason: "Black takes e4." },
        ]
      },
      {
        name: 'Falkbeer Variation',
        moves: [
          { san: 'e4', from: 'e2', to: 'e4', piece: 'wP', color: 'w', hint: 'e4', reason: "White opens." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "Black responds." },
          { san: 'Nc3', from: 'b1', to: 'c3', piece: 'wN', color: 'w', hint: 'Nc3', reason: "Vienna." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Black develops." },
          { san: 'g3', from: 'g2', to: 'g3', piece: 'wP', color: 'w', hint: 'g3', reason: "The Falkbeer! White prepares to fianchetto the bishop." },
        ]
      }
    ]
  },
  {
    id: 'bird',
    name: "Bird's Opening",
    icon: '🐦',
    desc: 'Unconventional and aggressive. White attacks the center with the f-pawn.',
    side: 'white',
    difficulty: 3,
    lines: [
      {
        name: 'Dutch Variation',
        moves: [
          { san: 'f4', from: 'f2', to: 'f4', piece: 'wP', color: 'w', hint: 'f4', reason: "The Bird! White attacks the center with the f-pawn, mirroring the Dutch Defense." },
          { san: 'd5', from: 'd7', to: 'd5', piece: 'bP', color: 'b', hint: 'd5', reason: "Black takes center." },
          { san: 'Nf3', from: 'g1', to: 'f3', piece: 'wN', color: 'w', hint: 'Nf3', reason: "Develop knight." },
          { san: 'Nf6', from: 'g8', to: 'f6', piece: 'bN', color: 'b', hint: 'Nf6', reason: "Develop knight." },
          { san: 'e3', from: 'e2', to: 'e3', piece: 'wP', color: 'w', hint: 'e3', reason: "Prepare development." },
          { san: 'g6', from: 'g7', to: 'g6', piece: 'bP', color: 'b', hint: 'g6', reason: "Black prepares to fianchetto." },
        ]
      },
      {
        name: "From's Gambit",
        moves: [
          { san: 'f4', from: 'f2', to: 'f4', piece: 'wP', color: 'w', hint: 'f4', reason: "Bird's Opening." },
          { san: 'e5', from: 'e7', to: 'e5', piece: 'bP', color: 'b', hint: 'e5', reason: "The From's Gambit! Black immediately challenges f4 with a pawn sacrifice." },
          { san: 'fxe5', from: 'f4', to: 'e5', piece: 'wP', color: 'w', hint: 'fxe5', reason: "White accepts." },
          { san: 'd6', from: 'd7', to: 'd6', piece: 'bP', color: 'b', hint: 'd6', reason: "Black offers another pawn for development." },
          { san: 'exd6', from: 'e5', to: 'd6', piece: 'wP', color: 'w', hint: 'exd6', reason: "White accepts." },
          { san: 'Bxd6', from: 'f8', to: 'd6', piece: 'bB', color: 'b', hint: 'Bxd6', reason: "Black develops with tempo." },
        ]
      }
    ]
  }
];
