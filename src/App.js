import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';
import DataTable from "./components/DataTable";
import _ from "lodash";
import Loader from './loader/Loader';
import Modal from './components/Modal';
import ModeSelector from './components/ModeSelector';
import TableSearch from './components/TableSearch';

export default class App extends Component {

    state = {
        isModeSelected: false,
        isLoader: false,
        data: [],
        search: '',
        sort: 'asc',
        sortField: 'id',
        modalProduct: [],
        modalOpen: false,
        modeSelect: `32`,
        row: null,
        currentPage: 0
    };

    async getUsers() {
        try {
            const response = await fetch(`http://www.filltext.com/?rows=${this.state.modeSelect}&id=
            {number|1000}&firstName={firstName}
            &lastName={lastName}&email={email}
            &phone={phone|(xxx)xxx-xx-xx}
            &address={addressObject}&description={lorem|32}`);

            const data = await response.json();

            this.setState({
                isLoader: false,
                data: _.orderBy(data, this.state.sortField, this.state.sort)
            });
        }
        catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.getUsers();
    }

    onSort = (sortField) => {
        const cloneData = [...this.state.data];
        const sort = this.state.sort === 'asc' ? 'desc' : 'asc';

        const data = _.orderBy(cloneData, sortField, sort);

        this.setState({
            data,
            sort,
            sortField
        })
    };

    openInfo = (name) => {
        let tempRow = [...this.state.data];
        let selectedRow = tempRow.find(item => item.lastName === name);

        this.setState({
            modalProduct: selectedRow,
            modalOpen: true
        });
    };

    closeInfo = () => {
        this.setState({
            modalOpen: false
        });
    };

    onModeSelect = (url) => {
        this.setState({
            isModeSelected: true,
            isLoader: true,
            modeSelect: url
        }, () => {
            this.getUsers();
        });
        return url;
    };

    pageChangeHandler = ({selected}) => {
        this.setState({currentPage: selected})
    };

    searchHandler = search => {
        this.setState({
            search,
            currentPage: 0
        });
    };

    getFilteredData() {
        const {data, search} = this.state;

        if(!search) {
            return data;
        }

        return data.filter(item => {
            return item['lastName'].toLowerCase().includes(search.toLowerCase())
        })
    }

    render() {
        let {sort, sortField, modalProduct, modalOpen} = this.state;
        const pageSize = 50;
        if (!this.state.isModeSelected) {
            return (
                <ModeSelector onModeSelect={this.onModeSelect}/>
            )
        }

        const filteredData = this.getFilteredData();

        const pageCount = Math.ceil(filteredData.length / pageSize);

        const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];

        return (
            <div className="container">
                {
                    this.state.isLoader
                        ?
                        <Loader/>
                        :
                        <>
                            <TableSearch onSearch={this.searchHandler}/>
                            <DataTable
                                data={displayData}
                                onSort={this.onSort}
                                sort={sort}
                                sortField={sortField}
                                openInfo={this.openInfo}
                            />

                            {
                                this.state.data.length > pageSize
                                    ?
                                    (
                                        <ReactPaginate
                                            previousLabel={'<'}
                                            nextLabel={'>'}
                                            breakLabel={'...'}
                                            breakClassName={'break-me page-item'}
                                            breakLinkClassName={'page-link'}
                                            pageCount={pageCount}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={this.pageChangeHandler}
                                            containerClassName={'pagination'}
                                            activeClassName={'active'}
                                            pageClassName='page-item'
                                            pageLinkClassName='page-link'
                                            previousClassName='page-item'
                                            nextClassName='page-item'
                                            nextLinkClassName='page-link'
                                            previousLinkClassName='page-link'
                                            forcePage={this.state.currentPage}
                                        />
                                    )
                                    : null}

                            <Modal
                                modalProduct={modalProduct}
                                modalOpen={modalOpen}
                                closeInfo={this.closeInfo}
                            />
                        </>
                }
            </div>
        )
    }
}