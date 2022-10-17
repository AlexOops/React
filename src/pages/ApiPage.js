import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getData} from "../redux/reducers/apiReducer/ApiReducer";
import {
    apiSelector,
    apiSelectorError,
    apiSelectorLoading
} from "../redux/reducers/apiReducer/ApiSelector";

const ApiPage = () => {
    const posts = useSelector(apiSelector);
    const error = useSelector(apiSelectorError);
    const loading = useSelector(apiSelectorLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    if (loading) {
        return (
            <div>
                Идет загрузка...
            </div>
        )
    }

    if (error) {
        return (
            <div>
                Произошла ошибка
            </div>
        )
    }

    return (
        <div>
            {posts.map((item) => {
                return (
                    <div key={item.id}>
                        {item.title}
                    </div>
                );
            })}
        </div>
    );

};

export default ApiPage;