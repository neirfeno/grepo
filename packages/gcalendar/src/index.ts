import { EntityMapping } from '@neirfeno/grepo-core';

interface SheetRow {
  rowNumber: number;
  values: unknown[];
}

export type SheetRowMapping = EntityMapping<SheetRow>;

export function helloGSheets(): string {
  return 'Hello from GSheets!';
} 