import {SubGrupo} from '@/types/SubGrupo'

export type Grupo = {
    id: number;
    nome: string;
    slug: string;
    subgrupos: SubGrupo[];
}