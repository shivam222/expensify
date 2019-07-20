import React from "react";
import { setTextFilter } from '../actions/filters';
import { sortByAmount } from '../actions/filters';
import { sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { connect } from 'react-redux';
import { DateRangePicker} from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
       calenderFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calenderFocused) => {
        this.setState( () => ({calenderFocused}));
    };

    render() {
        return (
            <div>
            <input type="text" value={this.props.filters.text} onChange={ (e) => {
                this.props.dispatch(setTextFilter(e.target.value));
            }}/>
           <select value = {this.props.filters.sortBy} onChange={(e) => {
               if (e.target.value == "amount") {
                   this.props.dispatch(sortByAmount());
               } else if (e.target.value == "date") {
                   this.props.dispatch(sortByDate());       
               }
           }}>
               <option value="date">Date</option>
               <option value="amount">Amount</option>
           </select>
           <DateRangePicker startDate={this.props.filters.startDate}
           endDate = {this.props.filters.endDate}
           onDatesChange = {this.onDatesChange}
           focusedInput={this.state.calenderFocused}
           onFocusChange={this.onFocusChange}
           showClearDates={true}
           numberOfMonths={1}
           isOutsideRange={() => false} />
        </div>
        );
    }
}

const mapStateToProps = (state) => {
   return {
      filters: state.filters
   }; 
};

export default connect(mapStateToProps)(ExpenseListFilters);