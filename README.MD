# Typescript

## Compilazione in Modalità Watch:

Questa sezione del codice TypeScript utilizza la modalità di "watch" (tsc app.ts --watch o tsc app.ts -w). In questo modo, ogni volta che apporti modifiche al file app.ts e salvi, TypeScript effettuerà automaticamente la generazione del file JavaScript corrispondente (app.js). Questo elimina la necessità di eseguire manualmente il comando di compilazione ogni volta.

    tsc app.ts -w

## Compilare l'Intero Progetto:

L'inizializzazione del progetto TypeScript (tsc --init) è un passo fondamentale. Dopo l'inizializzazione, TypeScript riconoscerà che stai lavorando su più file TypeScript senza la necessità di aprire una console separata per ciascun file. Inoltre, verrà generato un file di configurazione (tsconfig.json). Successivamente, puoi eseguire il comando tsc -w per abilitare la modalità "watch" e lavorare su tutti i file TypeScript nel progetto.

        tsc --init 


## Includere ed Escludere File:

Nel file tsconfig.json, è possibile configurare quali file TypeScript includere ed escludere durante la compilazione. Nel esempio, ho escluso il file src/server/server10.ts dalla compilazione ("exclude": ["src/server/server10.ts"]). Questo ti consente di gestire specificamente quali file TypeScript devono essere considerati durante la compilazione.

## Target della Compilazione:

La proprietà target nel file tsconfig.json definisce la versione di JavaScript per cui verrà compilato il codice TypeScript. In questo caso, il target è impostato su "es2016", indicando che il codice sarà compilato in JavaScript ECMAScript 2016 (ES6).

## Altre Opzioni di Configurazione:

Il file tsconfig.json contiene diverse opzioni di configurazione. Ad esempio, la proprietà "esModuleInterop": true abilita il supporto per l'importazione di moduli CommonJS in modo più compatibile. La proprietà "sourceMap": true consente di generare mappe sorgente che possono essere utilizzate per il debug nei file TypeScript direttamente nel browser.

outDir e rootDir:

- rootDir: Specifica la cartella radice dei file TypeScript ("rootDir": "./src" in questo caso). Questa è la directory in cui TypeScript cerca i file da compilare.

- outDir: Specifica la cartella in cui verranno posizionati i file JavaScript compilati ("outDir": "./dist" in questo caso). Questo è il percorso in cui i file JavaScript compilati saranno salvati.