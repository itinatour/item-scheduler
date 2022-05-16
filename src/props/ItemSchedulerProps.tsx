import React from "react";

export interface ItemSchedulerProps {
    rowDescriptionWidth: string
    rowDescriptionStyle: React.CSSProperties
    scrollToIndex: number
    itemWidth: string
    rowHeight: string
    rowSplit: number,
    rowDescriptions: string[]
    noColumns: number,
    id: string,
    canExtendItems: boolean,
    items: {
        id: string,
        startIndex: number,
        startSplit: number,
        endIndex: number,
        endIndexSplit: number,
        contents: any
    }[],
    background: React.CSSProperties,
    border: React.CSSProperties,
    onDragSuccess: () => void,
    onDragFailer: () => void,
    item: React.FC,
}
