import React from 'react';
import URL from 'url';
import Xray from 'x-ray';
import uuid from 'uuid';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            EbookUrl : ''
        }
        this._doQueryEbookPage = this._doQueryEbookPage.bind(this);
        this._changeEbookUrl = this._changeEbookUrl.bind(this);

        this.Ebook = {
            id : uuid.v4()
        }
    }

    _doQueryEbookPage(e) {
        e.preventDefault();
        var query = URL.parse(this.state.EbookUrl).query;

    }

    _changeEbookUrl(e){
        this.setState({EbookUrl : e.target.value});
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12"><h1 className="header">Công cụ tải ebook tại timsach.com.vn</h1></div>
            </div>
            <div className="row row-space">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="input-group">
                                <input type="text" ref="txtEbookPage" className="form-control"
                                       placeholder="http://www.timsach.com.vn/docsachxua_flash.php?MagID=XXX&MagNo=XXXX" vaule={this.state.EbookUrl} onChange={this._changeEbookUrl}/>
                                  <span className="input-group-btn">
                                    <button className="btn btn-default" type="button" onClick={this._doQueryEbookPage}>
                                        Tìm kiếm
                                    </button>
                                  </span>
                            </div>
                        </div>
                    </div>
                    <div className="row row-space">
                        <div className="col-md-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">Tên sách</div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th>Danh sách chương</th>
                                            </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}