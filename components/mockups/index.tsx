import FinanceDashboard from "./FinanceDashboard";
import InventoryDashboard from "./InventoryDashboard";
import POSDashboard from "./POSDashboard";
import HRDashboard from "./HRDashboard";
import BookingDashboard from "./BookingDashboard";
import CRMDashboard from "./CRMDashboard";
import EcommerceDashboard from "./EcommerceDashboard";
import PayrollDashboard from "./PayrollDashboard";
import ProjectDashboard from "./ProjectDashboard";
import GenericDashboard from "./GenericDashboard";

const mockupMap: Record<string, React.ComponentType> = {
  FinanceDashboard,
  InventoryDashboard,
  POSDashboard,
  HRDashboard,
  BookingDashboard,
  CRMDashboard,
  EcommerceDashboard,
  PayrollDashboard,
  ProjectDashboard,
  GenericDashboard,
};

export function getMockup(name: string): React.ComponentType {
  return mockupMap[name] || GenericDashboard;
}

export {
  FinanceDashboard,
  InventoryDashboard,
  POSDashboard,
  HRDashboard,
  BookingDashboard,
  CRMDashboard,
  EcommerceDashboard,
  PayrollDashboard,
  ProjectDashboard,
  GenericDashboard,
};
