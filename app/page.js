"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

function team(id, name, flagCode) {
  return {
    id,
    name,
    flagCode,
    flagUrl: `https://flagcdn.com/${flagCode}.svg`,
  };
}

const teams = {
  mexico: team("mexico", "Mexico", "mx"),
  southAfrica: team("south-africa", "South Africa", "za"),
  southKorea: team("south-korea", "South Korea", "kr"),
  czechia: team("czechia", "Czechia", "cz"),
  canada: team("canada", "Canada", "ca"),
  bosnia: team("bosnia", "Bosnia & Herzegovina", "ba"),
  qatar: team("qatar", "Qatar", "qa"),
  switzerland: team("switzerland", "Switzerland", "ch"),
  brazil: team("brazil", "Brazil", "br"),
  morocco: team("morocco", "Morocco", "ma"),
  haiti: team("haiti", "Haiti", "ht"),
  scotland: team("scotland", "Scotland", "gb"),
  usa: team("usa", "United States", "us"),
  paraguay: team("paraguay", "Paraguay", "py"),
  australia: team("australia", "Australia", "au"),
  turkey: team("turkey", "Turkey", "tr"),
  germany: team("germany", "Germany", "de"),
  curacao: team("curacao", "Curacao", "cw"),
  ivoryCoast: team("ivory-coast", "Ivory Coast", "ci"),
  ecuador: team("ecuador", "Ecuador", "ec"),
  netherlands: team("netherlands", "Netherlands", "nl"),
  japan: team("japan", "Japan", "jp"),
  sweden: team("sweden", "Sweden", "se"),
  tunisia: team("tunisia", "Tunisia", "tn"),
  belgium: team("belgium", "Belgium", "be"),
  egypt: team("egypt", "Egypt", "eg"),
  iran: team("iran", "Iran", "ir"),
  newZealand: team("new-zealand", "New Zealand", "nz"),
  spain: team("spain", "Spain", "es"),
  capeVerde: team("cape-verde", "Cape Verde", "cv"),
  saudiArabia: team("saudi-arabia", "Saudi Arabia", "sa"),
  uruguay: team("uruguay", "Uruguay", "uy"),
  france: team("france", "France", "fr"),
  senegal: team("senegal", "Senegal", "sn"),
  iraq: team("iraq", "Iraq", "iq"),
  norway: team("norway", "Norway", "no"),
  argentina: team("argentina", "Argentina", "ar"),
  algeria: team("algeria", "Algeria", "dz"),
  austria: team("austria", "Austria", "at"),
  jordan: team("jordan", "Jordan", "jo"),
  portugal: team("portugal", "Portugal", "pt"),
  drCongo: team("dr-congo", "DR Congo", "cd"),
  uzbekistan: team("uzbekistan", "Uzbekistan", "uz"),
  colombia: team("colombia", "Colombia", "co"),
  england: team("england", "England", "gb"),
  croatia: team("croatia", "Croatia", "hr"),
  ghana: team("ghana", "Ghana", "gh"),
  panama: team("panama", "Panama", "pa"),
};

const initialGroupDefinitions = [
  { key: "A", name: "Grupo A", teams: [teams.mexico, teams.southAfrica, teams.southKorea, teams.czechia] },
  { key: "B", name: "Grupo B", teams: [teams.canada, teams.bosnia, teams.qatar, teams.switzerland] },
  { key: "C", name: "Grupo C", teams: [teams.brazil, teams.morocco, teams.haiti, teams.scotland] },
  { key: "D", name: "Grupo D", teams: [teams.usa, teams.paraguay, teams.australia, teams.turkey] },
  { key: "E", name: "Grupo E", teams: [teams.germany, teams.curacao, teams.ivoryCoast, teams.ecuador] },
  { key: "F", name: "Grupo F", teams: [teams.netherlands, teams.japan, teams.sweden, teams.tunisia] },
  { key: "G", name: "Grupo G", teams: [teams.belgium, teams.egypt, teams.iran, teams.newZealand] },
  { key: "H", name: "Grupo H", teams: [teams.spain, teams.capeVerde, teams.saudiArabia, teams.uruguay] },
  { key: "I", name: "Grupo I", teams: [teams.france, teams.senegal, teams.iraq, teams.norway] },
  { key: "J", name: "Grupo J", teams: [teams.argentina, teams.algeria, teams.austria, teams.jordan] },
  { key: "K", name: "Grupo K", teams: [teams.portugal, teams.drCongo, teams.uzbekistan, teams.colombia] },
  { key: "L", name: "Grupo L", teams: [teams.england, teams.croatia, teams.ghana, teams.panama] },
];

const thirdSlotSources = {
  "3A/B/C/D/F": "F",
  "3C/D/F/G/H": "G",
  "3B/E/F/I/J": "E",
  "3A/E/H/I/J": "A",
  "3C/E/F/H/I": "I",
  "3E/H/I/J/K": "H",
  "3E/F/G/I/J": "J",
  "3D/E/I/J/L": "D",
};

function createInitialGroups() {
  return initialGroupDefinitions.map((group) => ({ ...group, teams: [...group.teams] }));
}

function buildSeedMap(groupStandings) {
  const groupsByKey = Object.fromEntries(groupStandings.map((group) => [group.key, group]));

  return Object.fromEntries(
    openingMatches.flatMap((match) =>
      match.seeds.map((seed) => {
        if (thirdSlotSources[seed]) {
          return [seed, groupsByKey[thirdSlotSources[seed]].teams[2]];
        }

        const position = Number(seed[0]) - 1;
        const groupKey = seed[1];
        return [seed, groupsByKey[groupKey].teams[position]];
      }),
    ),
  );
}

const openingMatches = [
  { number: 73, seeds: ["1E", "3A/B/C/D/F"], date: "Jun 29", city: "Boston", bracket: "Llave superior" },
  { number: 74, seeds: ["1I", "3C/D/F/G/H"], date: "Jun 30", city: "New York/New Jersey", bracket: "Llave superior" },
  { number: 75, seeds: ["2A", "2B"], date: "Jun 28", city: "Los Angeles", bracket: "Llave superior" },
  { number: 76, seeds: ["1F", "2C"], date: "Jun 30", city: "Monterrey", bracket: "Llave superior" },
  { number: 77, seeds: ["2K", "2L"], date: "Jul 2", city: "Toronto", bracket: "Llave superior" },
  { number: 78, seeds: ["1H", "2J"], date: "Jul 2", city: "Los Angeles", bracket: "Llave superior" },
  { number: 79, seeds: ["1D", "3B/E/F/I/J"], date: "Jul 2", city: "San Francisco", bracket: "Llave superior" },
  { number: 80, seeds: ["1G", "3A/E/H/I/J"], date: "Jul 1", city: "Seattle", bracket: "Llave superior" },
  { number: 81, seeds: ["1C", "2F"], date: "Jun 29", city: "Houston", bracket: "Llave inferior" },
  { number: 82, seeds: ["2E", "2I"], date: "Jun 30", city: "Dallas", bracket: "Llave inferior" },
  { number: 83, seeds: ["1A", "3C/E/F/H/I"], date: "Jul 1", city: "Ciudad de Mexico", bracket: "Llave inferior" },
  { number: 84, seeds: ["1L", "3E/H/I/J/K"], date: "Jul 1", city: "Atlanta", bracket: "Llave inferior" },
  { number: 85, seeds: ["1J", "2H"], date: "Jul 3", city: "Miami", bracket: "Llave inferior" },
  { number: 86, seeds: ["2D", "2G"], date: "Jul 3", city: "Dallas", bracket: "Llave inferior" },
  { number: 87, seeds: ["1B", "3E/F/G/I/J"], date: "Jul 3", city: "Vancouver", bracket: "Llave inferior" },
  { number: 88, seeds: ["1K", "3D/E/I/J/L"], date: "Jul 4", city: "Kansas City", bracket: "Llave inferior" },
];

const rounds = [
  { key: "r32", title: "Fase Final", short: "P73-88", label: "Round of 32", date: "Jun 28 - Jul 4", matches: 16 },
  { key: "r16", title: "Octavos", short: "R16", label: "Round of 16", date: "Jul 4 - 7", matches: 8 },
  { key: "qf", title: "Cuartos", short: "QF", label: "Quarter Finals", date: "Jul 9 - 11", matches: 4 },
  { key: "sf", title: "Semifinales", short: "SF", label: "Semi Finals", date: "Jul 14 - 15", matches: 2 },
  { key: "final", title: "Gran Final", short: "Final", label: "Final", date: "Jul 19 - MetLife Stadium", matches: 1 },
];

const colorBands = ["#ff2b12", "#ffffff", "#99ff00", "#1ee45f", "#2447ff", "#a7d4ff", "#8b0014"];
const predictionStorageKey = "world-cup-2026-prediction-v1";

const groupRankStyles = [
  "bg-gradient-to-br from-yellow-200 via-amber-300 to-yellow-600 text-amber-950 shadow-amber-950/35",
  "bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500 text-slate-950 shadow-slate-950/30",
  "bg-gradient-to-br from-orange-200 via-amber-600 to-orange-900 text-orange-950 shadow-orange-950/35",
  "bg-white/15 text-white shadow-slate-950/20",
];

function createEmptyMatch(matchNumber) {
  return {
    number: matchNumber,
    seeds: ["Winner", "Winner"],
    teams: [null, null],
    winnerId: null,
    scores: ["", ""],
  };
}

function createInitialBracket(groupStandings = createInitialGroups()) {
  const seedMap = buildSeedMap(groupStandings);

  return {
    r32: openingMatches.map((match) => ({
      ...match,
      teams: match.seeds.map((seed) => seedMap[seed]),
      winnerId: null,
      scores: ["", ""],
    })),
    r16: Array.from({ length: 8 }, (_, index) => createEmptyMatch(89 + index)),
    qf: [
      { ...createEmptyMatch(97), date: "Jul 9", city: "Boston" },
      { ...createEmptyMatch(98), date: "Jul 10", city: "Los Angeles" },
      { ...createEmptyMatch(99), date: "Jul 11", city: "Miami" },
      { ...createEmptyMatch(100), date: "Jul 11", city: "Kansas City" },
    ],
    sf: [
      { ...createEmptyMatch(101), date: "Jul 14", city: "Arlington/Dallas" },
      { ...createEmptyMatch(102), date: "Jul 15", city: "Atlanta" },
    ],
    final: [{ ...createEmptyMatch(104), date: "Jul 19", city: "MetLife Stadium" }],
  };
}

function cloneBracket(bracket) {
  return Object.fromEntries(
    Object.entries(bracket).map(([roundKey, matches]) => [
      roundKey,
      matches.map((match) => ({
        ...match,
        teams: [...match.teams],
        scores: [...match.scores],
      })),
    ]),
  );
}

function clearFromRound(bracket, roundIndex, matchIndex) {
  let currentMatchIndex = matchIndex;
  let currentSlotIndex = matchIndex % 2;

  for (let index = roundIndex + 1; index < rounds.length; index += 1) {
    const targetRound = rounds[index].key;
    const targetMatch = Math.floor(currentMatchIndex / 2);

    if (!bracket[targetRound]?.[targetMatch]) continue;

    bracket[targetRound][targetMatch] = {
      ...bracket[targetRound][targetMatch],
      teams: bracket[targetRound][targetMatch].teams.map((team, teamIndex) =>
        teamIndex === currentSlotIndex ? null : team,
      ),
      winnerId: null,
      scores: ["", ""],
    };

    currentMatchIndex = targetMatch;
    currentSlotIndex = targetMatch % 2;
  }
}

function getBracketProgress(bracket) {
  const allMatches = rounds.flatMap((round, roundIndex) =>
    bracket[round.key].map((match, matchIndex) => ({ match, round, roundIndex, matchIndex })),
  );
  const completed = allMatches.filter(({ match }) => match.winnerId).length;
  const active = allMatches.find(({ match }) => !match.winnerId && match.teams.every(Boolean));

  return {
    active,
    completed,
    total: allMatches.length,
  };
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("bracket");
  const [userName, setUserName] = useState("");
  const [groupStandings, setGroupStandings] = useState(createInitialGroups);
  const [bracket, setBracket] = useState(() => createInitialBracket(createInitialGroups()));
  const [isMobileCardLeaving, setIsMobileCardLeaving] = useState(false);
  const [hasLoadedPrediction, setHasLoadedPrediction] = useState(false);
  const progress = getBracketProgress(bracket);
  const champion = bracket.final[0].teams.find((team) => team?.id === bracket.final[0].winnerId);

  useEffect(() => {
    try {
      const savedPrediction = window.localStorage.getItem(predictionStorageKey);
      if (!savedPrediction) {
        setHasLoadedPrediction(true);
        return;
      }

      const prediction = JSON.parse(savedPrediction);
      if (typeof prediction.userName === "string") setUserName(prediction.userName);
      if (Array.isArray(prediction.groupStandings)) setGroupStandings(prediction.groupStandings);
      if (prediction.bracket) setBracket(prediction.bracket);
    } catch {
      window.localStorage.removeItem(predictionStorageKey);
    } finally {
      setHasLoadedPrediction(true);
    }
  }, []);

  useEffect(() => {
    if (!hasLoadedPrediction) return;

    const prediction = {
      userName,
      groupStandings,
      bracket,
      championName: champion?.name || "",
      savedAt: new Date().toISOString(),
    };

    try {
      window.localStorage.setItem(predictionStorageKey, JSON.stringify(prediction));
    } catch {
      // Keep the bracket usable even if the browser blocks localStorage.
    }
  }, [bracket, champion?.name, groupStandings, hasLoadedPrediction, userName]);

  function resetBracket() {
    setBracket(createInitialBracket(groupStandings));
    setIsMobileCardLeaving(false);
  }

  function clearSavedPrediction() {
    const nextGroups = createInitialGroups();

    window.localStorage.removeItem(predictionStorageKey);
    setUserName("");
    setGroupStandings(nextGroups);
    setBracket(createInitialBracket(nextGroups));
    setIsMobileCardLeaving(false);
  }

  function resetGroups() {
    const nextGroups = createInitialGroups();
    setGroupStandings(nextGroups);
    setBracket(createInitialBracket(nextGroups));
    setIsMobileCardLeaving(false);
  }

  function reorderGroup(groupKey, fromIndex, toIndex) {
    if (fromIndex === toIndex || toIndex < 0 || toIndex > 3) return;

    const nextGroups = groupStandings.map((group) => {
      if (group.key !== groupKey) return group;

      const nextTeams = [...group.teams];
      const [movedTeam] = nextTeams.splice(fromIndex, 1);
      nextTeams.splice(toIndex, 0, movedTeam);

      return { ...group, teams: nextTeams };
    });

    setGroupStandings(nextGroups);
    setBracket(createInitialBracket(nextGroups));
    setIsMobileCardLeaving(false);
  }

  function updateScore(roundKey, matchIndex, teamIndex, value) {
    setBracket((current) => ({
      ...current,
      [roundKey]: current[roundKey].map((match, index) =>
        index === matchIndex
          ? { ...match, scores: match.scores.map((score, scoreIndex) => (scoreIndex === teamIndex ? value : score)) }
          : match,
      ),
    }));
  }

  function advanceTeam(roundIndex, matchIndex, team) {
    if (!team) return;

    const roundKey = rounds[roundIndex].key;
    const nextRound = rounds[roundIndex + 1]?.key;

    setBracket((current) => {
      const next = cloneBracket(current);
      next[roundKey][matchIndex].winnerId = team.id;

      if (nextRound) {
        const nextMatchIndex = Math.floor(matchIndex / 2);
        const nextSlotIndex = matchIndex % 2;
        clearFromRound(next, roundIndex, matchIndex);
        next[nextRound][nextMatchIndex].teams[nextSlotIndex] = team;
      }

      return next;
    });
  }

  function advanceTeamMobile(roundIndex, matchIndex, team) {
    if (isMobileCardLeaving || !team) return;

    setIsMobileCardLeaving(true);
    window.setTimeout(() => {
      advanceTeam(roundIndex, matchIndex, team);
      setIsMobileCardLeaving(false);
    }, 280);
  }

  return (
    <main className="relative isolate min-h-screen overflow-hidden px-3 py-4 text-white sm:px-6 lg:px-8">
      <DecorativeBands />

      <section className="mx-auto flex max-w-[98rem] flex-col gap-5">
        <header className="relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-white/10 p-4 shadow-glow backdrop-blur-xl sm:rounded-[2rem] sm:p-8">
          <div className="absolute -right-12 -top-10 h-44 w-44 rounded-full bg-yellow-300/30 blur-2xl" />
          <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-lime-400/25 blur-2xl" />

          <div className="relative flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div>
              {/* <p className="mb-3 inline-flex rounded-full border border-yellow-300/50 bg-yellow-300/15 px-3 py-1 text-xs font-black uppercase tracking-[0.28em] text-yellow-100">
                Simulacion oficial de llaves 2026
              </p> */}
              <h1 className="font-display text-[2.45rem] uppercase leading-[0.9] text-white min-[380px]:text-5xl sm:text-6xl lg:text-7xl">
                World Cup Bracket
              </h1>
            </div>

            <button
              onClick={resetBracket}
              className="rounded-2xl bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 px-5 py-3 text-sm font-black uppercase tracking-wide text-slate-950 shadow-lg shadow-red-950/30 transition hover:scale-[1.03] active:scale-95"
            >
              Reset bracket
            </button>
          </div>
        </header>

        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

        <PredictionSaveCard
          userName={userName}
          champion={champion}
          onUserNameChange={setUserName}
          onClear={clearSavedPrediction}
        />

        {activeTab === "groups" ? (
          <GroupsEditor groups={groupStandings} onReorder={reorderGroup} onReset={resetGroups} />
        ) : (
          <>
            {champion && <ChampionCard champion={champion} />}

            {!champion && progress.active && (
              <MobileMatchFlow
                active={progress.active}
                completed={progress.completed}
                total={progress.total}
                isLeaving={isMobileCardLeaving}
                onAdvance={advanceTeamMobile}
              />
            )}

            <section className="hidden gap-4 xl:grid xl:grid-cols-5 xl:items-start">
              {rounds.map((round, roundIndex) => (
                <div key={round.key} className="rounded-[1.75rem] border border-white/15 bg-slate-950/35 p-3 backdrop-blur-xl sm:p-4">
                  <div className="mb-4 flex items-center justify-between gap-3 px-1">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.26em] text-lime-200">{round.short}</p>
                      <h2 className="font-display text-2xl uppercase text-white">{round.title}</h2>
                      <p className="mt-1 text-xs font-bold text-blue-100/70">{round.date}</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-blue-900">
                      {round.matches}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 xl:gap-5">
                    {bracket[round.key].map((match, matchIndex) => (
                      <MatchCard
                        key={`${round.key}-${matchIndex}`}
                        match={match}
                        matchIndex={matchIndex}
                        roundKey={round.key}
                        roundIndex={roundIndex}
                        onAdvance={advanceTeam}
                        onScoreChange={updateScore}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </>
        )}
      </section>
    </main>
  );
}

function TeamFlag({ team, large = false, round = false }) {
  if (!team) {
    return <span className="text-2xl">🏟️</span>;
  }

  const sizeClass = round ? "h-9 w-9 rounded-full" : `${large ? "h-12 w-16" : "h-8 w-11"} rounded-md`;

  return (
    <span className={`${sizeClass} relative grid place-items-center overflow-hidden bg-slate-800 text-[0.65rem] font-black text-white shadow-sm shadow-slate-950/30`}>
      <img
        src={team.flagUrl}
        alt={`Bandera de ${team.name}`}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      {team.flagCode.toUpperCase()}
    </span>
  );
}

function Tabs({ activeTab, onTabChange }) {
  const tabs = [
    { key: "groups", label: "Grupos" },
    { key: "bracket", label: "Bracket" },
  ];

  return (
    <nav className="grid grid-cols-2 gap-2 rounded-[1.5rem] border border-white/15 bg-slate-950/35 p-2 backdrop-blur-xl">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onTabChange(tab.key)}
            className={`rounded-[1.1rem] px-4 py-3 text-sm font-black uppercase tracking-[0.18em] transition active:scale-[0.98] ${isActive
              ? "bg-gradient-to-r from-lime-300 via-yellow-300 to-red-500 text-slate-950 shadow-lg shadow-yellow-950/25"
              : "bg-white/10 text-white/75 hover:bg-white/15"
              }`}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}

function PredictionSaveCard({ userName, champion, onUserNameChange, onClear }) {
  const displayName = userName.trim();

  return (
    <section className="grid gap-3 rounded-[1.5rem] border border-white/15 bg-white/10 p-3 shadow-xl shadow-slate-950/20 backdrop-blur-xl sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-4">
      <div className="min-w-0">
        <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-lime-200">Guardado automatico</p>
        <h2 className="mt-1 truncate font-display text-2xl uppercase leading-none text-white sm:text-3xl">
          {displayName && champion ? (
            <>
              {displayName}: {champion.name}
              <br />
              Campeon
            </>
          ) : (
            <>
              Tu prediccion
              <br />
              queda guardada
            </>
          )}
        </h2>
        <p className="mt-2 text-xs font-bold text-blue-50/70 sm:text-sm">
          Se guarda en este navegador y vuelve al recargar la pagina.
        </p>
      </div>

      <div className="grid gap-2 sm:w-72">
        <label className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-yellow-100" htmlFor="prediction-user-name">
          Tu nombre
        </label>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2">
          <input
            id="prediction-user-name"
            type="text"
            value={userName}
            onChange={(event) => onUserNameChange(event.target.value)}
            placeholder="Dany"
            className="min-w-0 rounded-2xl border border-white/15 bg-slate-950/55 px-4 py-3 text-sm font-black uppercase text-white outline-none transition placeholder:text-white/35 focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/45"
          />
          <button
            type="button"
            onClick={onClear}
            className="rounded-2xl bg-white/15 px-3 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-white/25 active:scale-95"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

function GroupsEditor({ groups, onReorder, onReset }) {
  function handleDrop(event, groupKey, toIndex) {
    event.preventDefault();

    const payload = event.dataTransfer.getData("application/json");
    if (!payload) return;

    const dragged = JSON.parse(payload);
    if (dragged.groupKey !== groupKey) return;

    onReorder(groupKey, dragged.fromIndex, toIndex);
  }

  return (
    <section className="rounded-[1.75rem] border border-white/15 bg-slate-950/35 p-3 backdrop-blur-xl sm:p-5">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.26em] text-lime-200">Ordena cada grupo</p>
          <h2 className="font-display text-3xl uppercase text-white sm:text-4xl">Grupos 2026</h2>
          <p className="mt-2 max-w-2xl text-sm font-bold leading-6 text-blue-50/75">
            El 1, 2 y 3 de cada grupo alimentan automaticamente la llave. Usa las flechas en movil o arrastra equipos dentro del mismo grupo.
          </p>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="rounded-2xl bg-white px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-blue-950 transition hover:scale-[1.02] active:scale-95"
        >
          Reset grupos
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {groups.map((group) => (
          <article key={group.key} className="rounded-[1.5rem] border border-white/15 bg-white/10 p-3 shadow-xl shadow-slate-950/20">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-display text-2xl uppercase text-yellow-100">{group.name}</h3>
              <span className="rounded-full bg-lime-300 px-2.5 py-1 text-xs font-black text-slate-950">A-{group.key}</span>
            </div>

            <div className="grid gap-2">
              {group.teams.map((team, teamIndex) => {
                const rankStyle = groupRankStyles[teamIndex];

                return (
                  <div
                    key={team.id}
                    draggable
                    onDragStart={(event) => {
                      event.dataTransfer.setData("application/json", JSON.stringify({ groupKey: group.key, fromIndex: teamIndex }));
                      event.dataTransfer.effectAllowed = "move";
                    }}
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={(event) => handleDrop(event, group.key, teamIndex)}
                    className="grid grid-cols-[2rem_2.35rem_minmax(0,1fr)_4.5rem] items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/45 p-2"
                  >
                    <span className={`grid h-8 w-8 place-items-center rounded-xl text-sm font-black shadow-lg ${rankStyle}`}>
                      {teamIndex + 1}
                    </span>
                    <TeamFlag team={team} round />
                    <span className="truncate text-[0.72rem] font-black uppercase tracking-wide text-white sm:text-xs">{team.name}</span>
                    <span className="flex justify-end gap-1">
                      <button
                        type="button"
                        aria-label={`Subir ${team.name}`}
                        disabled={teamIndex === 0}
                        onClick={() => onReorder(group.key, teamIndex, teamIndex - 1)}
                        className="grid h-8 w-8 place-items-center rounded-xl bg-white/15 text-sm font-black text-white disabled:opacity-30"
                      >
                        ↑
                      </button>
                      <button
                        type="button"
                        aria-label={`Bajar ${team.name}`}
                        disabled={teamIndex === group.teams.length - 1}
                        onClick={() => onReorder(group.key, teamIndex, teamIndex + 1)}
                        className="grid h-8 w-8 place-items-center rounded-xl bg-white/15 text-sm font-black text-white disabled:opacity-30"
                      >
                        ↓
                      </button>
                    </span>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MobileMatchFlow({ active, completed, total, isLeaving, onAdvance }) {
  const { match, round, roundIndex, matchIndex } = active;
  const progressPercent = Math.round((completed / total) * 100);

  return (
    <section className="w-full max-w-full overflow-hidden xl:hidden">

      <div className={isLeaving ? "mobile-card-exit" : "mobile-card-enter"}>
        <article className="relative w-full max-w-full overflow-hidden rounded-[1.6rem] border border-yellow-200/35 bg-gradient-to-br from-blue-950/95 via-emerald-950/90 to-red-950/90 p-3 shadow-glow backdrop-blur-xl min-[380px]:rounded-[2rem] min-[380px]:p-4">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime-300/25 blur-2xl" />
          <div className="absolute -bottom-14 -left-14 h-40 w-40 rounded-full bg-red-500/25 blur-2xl" />

          <div className="relative mb-4 grid gap-3 min-[380px]:grid-cols-[minmax(0,1fr)_auto] min-[380px]:items-start">
            <div className="min-w-0">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-yellow-100">Partido {match.number}</p>
              <h3 className="mt-1 truncate font-display text-[2rem] uppercase leading-none text-white min-[380px]:text-4xl">{round.label}</h3>
              <div className="flex gap-3 mt-2">
                <p className="mt-2 text-sm font-bold text-blue-100/75">{match.city || "Por definir"}</p>
                <div className="w-fit rounded-2xl bg-white/95 px-3 py-2 text-left text-xs font-black uppercase text-slate-950 min-[380px]:text-right">
                  {match.date || "TBD"}
                </div>
              </div>
            </div>

          </div>

          <div className="relative grid gap-3">
            {match.teams.map((team, teamIndex) => (
              <button
                key={team.id}
                type="button"
                disabled={isLeaving}
                onClick={() => onAdvance(roundIndex, matchIndex, team)}
                className="group w-full max-w-full rounded-[1.35rem] border border-white/15 bg-white/12 p-2.5 text-left shadow-xl shadow-slate-950/20 transition active:scale-[0.98] disabled:opacity-70 min-[380px]:rounded-[1.6rem] min-[380px]:p-3"
              >
                <div className="grid min-w-0 grid-cols-[4.25rem_minmax(0,1fr)] items-center gap-2 min-[380px]:grid-cols-[5rem_minmax(0,1fr)] min-[380px]:gap-3">
                  <span className="grid h-12 w-16 shrink-0 place-items-center overflow-hidden rounded-xl shadow-lg shadow-slate-950/30 min-[380px]:h-14 min-[380px]:w-20 min-[380px]:rounded-2xl">
                    <TeamFlag team={team} large />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[0.65rem] font-black uppercase tracking-[0.16em] text-lime-200 min-[380px]:text-xs min-[380px]:tracking-[0.22em]">
                      {match.seeds?.[teamIndex]}
                    </span>
                    <span className="block truncate font-display text-xl uppercase leading-none text-white min-[380px]:text-2xl">
                      {team.name}
                    </span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-4 mb-6 rounded-[1.45rem] border border-white/15 bg-white/10 p-3 backdrop-blur-xl min-[380px]:p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-lime-200 min-[380px]:text-xs">Modo dinamico</p>
            <h2 className="truncate font-display text-2xl uppercase leading-none text-white min-[380px]:text-3xl">{round.title}</h2>
          </div>
          <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-black text-blue-900">
            {completed + 1}/{total}
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-950/55">
          <div
            className="h-full rounded-full bg-gradient-to-r from-lime-300 via-yellow-300 to-red-500 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="mt-3 text-xs font-bold leading-5 text-blue-50/80 min-[380px]:text-sm">
          Elige ganador. La tarjeta desaparece y aparece el siguiente partido automaticamente.
        </p>
      </div>


    </section>
  );
}

function MatchCard({ match, matchIndex, roundKey, roundIndex, onAdvance, onScoreChange }) {
  return (
    <article className="rounded-[1.35rem] border border-white/10 bg-white/10 p-2 shadow-xl shadow-slate-950/25 backdrop-blur">
      <div className="mb-2 flex items-start justify-between gap-2 px-2 pt-1 text-[0.68rem] font-black uppercase tracking-[0.14em] text-blue-100/75">
        <span>
          Partido {match.number || matchIndex + 1}
          <span className="block pt-1 normal-case tracking-normal text-yellow-100/80">{match.city || "Por definir"}</span>
        </span>
        <span className="text-right">
          {match.date || "TBD"}
          <span className="block pt-1 normal-case tracking-normal text-lime-100/80">{match.bracket || "Llave"}</span>
        </span>
      </div>

      <div className="grid gap-2">
        {match.teams.map((team, teamIndex) => {
          const isWinner = team?.id === match.winnerId;
          return (
            <button
              key={team?.id || `empty-${teamIndex}`}
              type="button"
              disabled={!team}
              onClick={() => onAdvance(roundIndex, matchIndex, team)}
              className={`group flex min-h-16 items-center gap-3 rounded-2xl border p-2 text-left transition active:scale-[0.98] ${isWinner
                ? "winner-pulse border-green-300 bg-gradient-to-r from-green-400/35 via-lime-300/25 to-yellow-300/25"
                : team
                  ? "border-white/15 bg-slate-900/55 hover:border-yellow-200 hover:bg-white/15"
                  : "border-dashed border-white/15 bg-white/[0.04] text-white/35"
                }`}
            >
              <span className="grid h-12 w-14 shrink-0 place-items-center rounded-2xl bg-white p-1 shadow-inner shadow-slate-950/20">
                <TeamFlag team={team} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-black uppercase tracking-wide text-white">
                  {team?.name || match.seeds?.[teamIndex] || "Waiting"}
                </span>
                <span className={`text-xs font-bold ${isWinner ? "text-green-100" : "text-blue-100/60"}`}>
                  {isWinner ? "Winner advancing" : team ? match.seeds?.[teamIndex] : "Play previous round"}
                </span>
              </span>
              <input
                aria-label={`${team?.name || "empty"} score`}
                type="number"
                min="0"
                value={match.scores[teamIndex]}
                disabled={!team}
                onClick={(event) => event.stopPropagation()}
                onChange={(event) => onScoreChange(roundKey, matchIndex, teamIndex, event.target.value)}
                className="h-11 w-12 rounded-xl border border-white/15 bg-white/95 text-center text-base font-black text-slate-950 outline-none transition focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/60 disabled:bg-white/15 disabled:text-white/30"
                placeholder="0"
              />
            </button>
          );
        })}
      </div>
    </article>
  );
}

function ChampionCard({ champion }) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-yellow-200/50 bg-gradient-to-br from-yellow-300 via-amber-400 to-red-500 p-5 text-center text-slate-950 shadow-glow sm:p-8">
      <Confetti />
      <div className="relative mx-auto max-w-xl">
        <div className="trophy-float text-7xl sm:text-8xl">🏆</div>
        <p className="mt-3 text-xs font-black uppercase tracking-[0.32em] text-red-950/75">Campeon Mundial 2026</p>
        <h2 className="mt-2 flex flex-col items-center justify-center gap-3 font-display text-4xl uppercase leading-none sm:flex-row sm:text-6xl">
          <span className="rounded-2xl bg-white p-2 shadow-lg">
            <TeamFlag team={champion} large />
          </span>
          {champion.name}
        </h2>
        <p className="mt-3 text-sm font-bold text-slate-900/80">La gloria esta lista. El trofeo ya tiene dueno.</p>
      </div>
    </section>
  );
}

function DecorativeBands() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-80">
      <div className="absolute -left-28 top-10 h-[36rem] w-[36rem] rounded-[8rem] border-[2.7rem] border-lime-300/65" />
      <div className="absolute -right-36 top-20 h-[30rem] w-[30rem] rounded-[7rem] border-[2.2rem] border-blue-500/55" />
      <div className="absolute left-1/2 top-40 h-[22rem] w-[22rem] -translate-x-1/2 rounded-[5rem] border-[1.8rem] border-red-500/45" />
    </div>
  );
}

function Confetti() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 34 }).map((_, index) => (
        <span
          key={index}
          className="confetti-piece absolute top-0 h-3 w-2 rounded-sm"
          style={{
            left: `${(index * 29) % 100}%`,
            background: colorBands[index % colorBands.length],
            "--x-start": `${((index * 17) % 24) - 12}px`,
            "--x-end": `${((index * 31) % 140) - 70}px`,
            "--duration": `${2.5 + (index % 5) * 0.45}s`,
            "--delay": `${(index % 12) * -0.18}s`,
          }}
        />
      ))}
    </div>
  );
}
