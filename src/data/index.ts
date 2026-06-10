import cashflowsData from './cashflows.json';
import revenueData from './revenue.json';
import ppeData from './ppe.json';

export interface ComparisonRow {
  basisOfComparison: string;
  as: string;
  indAs: string;
  ifrs: string;
  usGaap: string;
  logicShift?: string;
}

export const cashflows: ComparisonRow[] = cashflowsData as ComparisonRow[];
export const revenue: ComparisonRow[] = revenueData as ComparisonRow[];
export const ppe: ComparisonRow[] = ppeData as ComparisonRow[];
