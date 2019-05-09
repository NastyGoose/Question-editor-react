import React, { Component } from 'react';
import PatchForm from '../../forms/patchForm';
import { Page } from '../../../assets/styles';
import { savePatch } from '../../../services/patchService';

class PatchEditor extends Component {
  handleSubmit = async (data) => {
    await savePatch(data);
    this.props.history.push('/patches');
  };

  render() {
    return (
      <Page narrow>
        <h2>Редактор выпусков</h2>
        <PatchForm onSubmit={this.handleSubmit} />
      </Page>
    );
  }
}

export default PatchEditor;
