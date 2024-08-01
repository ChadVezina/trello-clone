import { ACTION, AuditLog } from "@prisma/client";

export const generateLogMessage = (log: AuditLog) => {
  const { action, entityType, entityTitle } = log;

  /*
  switch (action) {
    case ACTION.CREATE:
      return `Created ${entityType.toLowerCase()}: "${entityTitle}"`;
    case ACTION.UPDATE:
      return `Updated ${entityType.toLowerCase()}: "${entityTitle}"`;
    case ACTION.DELETE:
      return `Deleted ${entityType.toLowerCase()}: "${entityTitle}"`;
    default:
      return `Unknown action ${entityType.toLowerCase()}: "${entityTitle}"`;
    }
    */

  switch (action) {
    case ACTION.CREATE:
      return (
        <>
          {action.toLowerCase()}
          {"d "}
          {entityType.toLowerCase()}:{" "}
          <ins>
            <b>{entityTitle}</b>
          </ins>
        </>
      );
    case ACTION.UPDATE:
      return (
        <>
          {action.toLowerCase()}
          {"d "}
          {entityType.toLowerCase()}:{" "}
          <mark>
            <b>{entityTitle}</b>
          </mark>
        </>
      );
    case ACTION.DELETE:
      return (
        <>
          {action.toLowerCase()}
          {"d "}
          {entityType.toLowerCase()}:{" "}
          <del>
            <b>{entityTitle}</b>
          </del>
        </>
      );
    default:
      return (
        <>
          {"unknown action"} {entityType.toLowerCase()}: <b>{entityTitle}</b>
        </>
      );
  }
};
