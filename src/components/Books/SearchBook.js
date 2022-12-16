import React from "react";
import { Form, Modal, Select, Spin } from 'antd';
import { debounce } from 'lodash';
import Item from "./BookListItem";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState, useMemo } from "react";
import { app, auth, db } from '../Firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { async } from '@firebase/util';

function DebounceSelect({fetchOptions, timeout = 300, ...props}){

    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);

    const debounceSelect = useMemo(() => {
        const loadOptions = (value) => {
            setOptions([]);
            setFetching(true);

            fetchOptions(value, props).then((newOptions) => {
                setOptions(newOptions);
                setFetching(false);
            });
        };
        return debounce(loadOptions, timeout);
    }, [timeout, fetchOptions]);

    useEffect(() => {
        return () => {
            setOptions([]);
            debounceSelect.cancel();
        };
    }, []);

    return (
        <Select labelInValue filterOption={false} onSearch={debounceSelect} notFoundContent={fetching ? <Spin size="small" /> : null} {...props}>
            {options.map((option) => (
                <Select.Option key={option.value} value={option.value} title={option.label}>
                    {option.label}
                </Select.Option>
            ))}
        </Select>
    );
}

async function searchBook(searchText) {
    try {
        return db.collection('books').where('title', '==', searchText).get().then((querySnapshot) => {
            return querySnapshot.docs.map((doc) => ({
                label: doc.data().title,
                img: doc.data().img,
            }));
        }
        );
    } catch (error) {
        console.log(error);
    }
}



export function SearchBook() {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const handleOK = () => {
        form.resetFields();
        setVisible(false);
    }

    const handleCancel = () => {
        form.resetFields();
        setVisible(false);
    }

    return (
        <div>
            <Modal title="Search Book" open={visible} onOk={handleOK} onCancel={handleCancel} destroyOnClose={true}>
                <Form form={form} layout="vertical">
                    <DebounceSelect mode='multiple' name='Search Book' label='Book title' value={visible} placeholder='Book title..' fetchOptions={searchBook} onChange={(newOption)=> setVisible(newOption)} style={{ width: '100%' }}/>
                </Form>
            </Modal>
        </div>
    )
}