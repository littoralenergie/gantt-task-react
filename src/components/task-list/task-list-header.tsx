import React from "react";
import styles from "./task-list-header.module.css";

export const TaskListHeaderDefault: React.FC<{
  headerHeight: number;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize }) => {
  return (
    <div
      className={styles.ganttTable}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      <div
        className={styles.ganttTable_Header}
        style={{
          height: headerHeight - 2,
        }}
      >
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: "195px",
            maxWidth: "195px",
          }}
        >
          <span>&nbsp;Titre</span>
        </div>
        <div
          className={styles.ganttTable_HeaderSeparator}
          style={{
            height: headerHeight * 0.5,
            marginTop: headerHeight * 0.2,
          }}
        />
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: "120px",
            maxWidth: "120px",
          }}
        >
          <span>&nbsp;Début</span>
        </div>
        <div
          className={styles.ganttTable_HeaderSeparator}
          style={{
            height: headerHeight * 0.5,
            marginTop: headerHeight * 0.25,
          }}
        />
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: "120px",
            maxWidth: "120px",
          }}
        >
          <span>&nbsp;Fin</span>
        </div>
      </div>
    </div>
  );
};
