
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
                placeholder='Search'
            />
            <MySelect
                value={filter.sort}
                defaultValue='Sorting'
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {value: 'title', name: 'By name'},
                    {value: 'body', name: 'By description'}
                ]}
            />
        </div>
    );
};

export default PostFilter;
