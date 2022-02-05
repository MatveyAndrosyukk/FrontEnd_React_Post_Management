import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const FilterPost = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                placeholder = "Найти..."
                onChange={event => setFilter({...filter, query: event.target.value})}/>

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={"Сортировать по"}
                options={[{value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}]}
            />
        </div>
    );
};

export default FilterPost;