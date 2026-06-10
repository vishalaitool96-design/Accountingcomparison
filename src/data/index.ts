import cashflowsData from './cashflows.json';
import revenueData from './revenue.json';
import ppeData from './ppe.json';
import leaseData from './lease.json';
import financialInstrumentsData from './financial-instruments.json';
import deferredTaxData from './deferred-tax.json';
import consolidationData from './consolidation.json';
import impairmentData from './impairment.json';
import esopData from './esop.json';

export interface Section {
  sectionTitle: string;
  headers: string[];
  tableData: string[][];
}

export interface TopicData {
  title: string;
  description: string;
  sections: Section[];
}

export const topicDataMap: Record<string, TopicData> = {
  cashflows: cashflowsData as unknown as TopicData,
  revenue: revenueData as unknown as TopicData,
  ppe: ppeData as unknown as TopicData,
  lease: leaseData as unknown as TopicData,
  'financial-instruments': financialInstrumentsData as unknown as TopicData,
  'deferred-tax': deferredTaxData as unknown as TopicData,
  consolidation: consolidationData as unknown as TopicData,
  impairment: impairmentData as unknown as TopicData,
  esop: esopData as unknown as TopicData,
};
