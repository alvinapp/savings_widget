import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  addDays,
  isSameMonth,
  isSameDay,
  isAfter,
} from "date-fns";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Transparent dark background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const CalendarContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 280px;
  height: 330px;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  color: #455a64;
  padding-bottom: 16px;
`;

const WeekDays = styled.div`
  display: flex;
  justify-content: space-between;
  color: #90a4ae;
  font-size: 14px;
  padding-bottom: 8px;
`;

const WeekDay = styled.div`
  flex: 1;
  text-align: center;
  font-weight: 500;
`;

const DatesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DateCell = styled.div<{ isCurrentMonth: boolean; isSelected: boolean; isDisabled: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 50%;
  background-color: ${({ isSelected }) => (isSelected ? "#076489" : "transparent")};
  color: ${({ isSelected, isCurrentMonth, isDisabled }) =>
    isDisabled ? "#ccc" : isSelected ? "white" : isCurrentMonth ? "#455a64" : "#90a4ae"};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isSelected, isDisabled }) => (!isSelected && !isDisabled ? "#e6f0ff" : undefined)};
  }
`;

type CustomDatePickerProps = {
  selectedDate: Date | null;
  onDateChange: (date: Date) => void;
  minDate?: Date; // Add prop for minimum selectable date
  children: (props: { toggleCalendar: () => void }) => React.ReactNode;
};

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  selectedDate,
  onDateChange,
  minDate,
  children,
}) => {
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [isManualNavigation, setIsManualNavigation] = useState(false); // Track manual navigation

  // Scroll to selected date's month when the calendar is first opened
  useEffect(() => {
    if (!isManualNavigation && selectedDate && !isSameMonth(selectedDate, currentMonth)) {
      setCurrentMonth(selectedDate);
    }
  }, [selectedDate, showCalendar]); // Run when calendar opens or selected date changes

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
    setIsManualNavigation(true); // Mark that user is manually navigating
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
    setIsManualNavigation(true); // Mark that user is manually navigating
  };

  const handleDateClick = (day: Date) => {
    onDateChange(day);
    setShowCalendar(false); // Close calendar after selecting a date
    setIsManualNavigation(false); // Reset manual navigation tracking
  };

  const renderHeader = () => (
    <Header>
      <button onClick={handlePrevMonth}>
        <FiChevronLeft />
      </button>
      <div>{format(currentMonth, "MMMM yyyy")}</div>
      <button onClick={handleNextMonth}>
        <FiChevronRight />
      </button>
    </Header>
  );

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      const day = addDays(startDate, i);
      days.push(<WeekDay key={i}>{format(day, "EEE").substring(0, 2)}</WeekDay>);
    }
    return <WeekDays>{days}</WeekDays>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        const cloneDay = day;
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isSelected = selectedDate && isSameDay(day, selectedDate);
        const isDisabled = minDate && isAfter(minDate, day); // Disable days before `minDate`

        days.push(
          <DateCell
            key={day.toString()}
            isCurrentMonth={isCurrentMonth || false}
            isSelected={isSelected || false}
            isDisabled={isDisabled || false}
            onClick={() => !isDisabled && handleDateClick(cloneDay)}
          >
            {formattedDate}
          </DateCell>
        );
        day = addDays(day, 1);
      }
      rows.push(<DatesGrid key={day.toString()}>{days}</DatesGrid>);
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <>
      {children({ toggleCalendar: () => {
        setShowCalendar(!showCalendar);
        setIsManualNavigation(false); // Reset manual navigation when calendar toggles
      } })}
      {showCalendar && (
        <ModalOverlay onClick={() => setShowCalendar(false)}>
          <CalendarContainer onClick={(e) => e.stopPropagation()}>
            {renderHeader()}
            {renderDays()}
            {renderCells()}
          </CalendarContainer>
        </ModalOverlay>
      )}
    </>
  );
};