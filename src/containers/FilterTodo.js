import React from 'react';
import RemoveButton from '../components/RemoveButton';
import FilterButton from '../components/FilterButton';
import { connect } from 'react-redux';
import removeTodo from '../actions/removeTodo';
import filterTodo from '../actions/filterTodo'

const removeBtnNames = [
    {
        name:'Usuń zrobione',
        checked: false
    }, 
    {
        name: 'Usuń nie zrobione',
        checked: true
    }
]

const filterBtnNames = [
    {
        name:'All',
        filter: 'All'
    }, 
    {
        name: 'Zrobione',
        filter: 'Done'
    },
    {
        name: 'Nie zrobione',
        filter: 'Undone'
    }
]

const FilterTodo = ({removeTodo, filterTodo, filter}) => {
    const removeBtnList = removeBtnNames.map(btn => (
        <RemoveButton key={btn.name} children={btn.name} handleBtn={() => removeTodo(btn.checked)}/>
    ))
    const filterBtnList = filterBtnNames.map(btn => (
        <FilterButton key={btn.name} children={btn.name} disabled={filter === btn.filter} handleFilter={()=> filterTodo(btn.filter)}/>
    ))

    return (
        <>
            <div style={{dispaly:'flex'}}>
                {filterBtnList}
                <br/>
                {removeBtnList}
            </div>
        </>
    );
}

const mapStateToProps = state => (
    {
        filter: state.filter
    }
)

const mapDispatchToProps = ({
    removeTodo,
    filterTodo,
})


export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo)
