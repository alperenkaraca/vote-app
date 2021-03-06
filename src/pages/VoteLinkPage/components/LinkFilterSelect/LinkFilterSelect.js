import './index.css'

import React from 'react'
import { Select } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setSelectedOrder } from '../../../../redux/actions'
import { linksOrderOptions } from '../../constants'

const { Option } = Select

const LinkFilterSelect = ({ selectedOrder, setSelectedOrder }) => {
  const onChangeFilter = (value) => {
    setSelectedOrder(value)
  }
  return (
    <Select
      className='link-filter-select'
      defaultValue={linksOrderOptions.defaultTitle}
      onChange={onChangeFilter}
      {...(selectedOrder && { value: selectedOrder })}
    >
      {Object.values(linksOrderOptions.options).map((filterOption, i) => (
        <Option key={i} value={filterOption.value}>
          {filterOption.title}
        </Option>
      ))}
    </Select>
  )
}

LinkFilterSelect.propTypes = {
  selectedOrder: PropTypes.string,
  setSelectedOrder: PropTypes.func
}

const mapStateToProps = (state) => ({
  selectedOrder: state.linkReducer.selectedOrder
})

const mapDispatchToProps = {
  setSelectedOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkFilterSelect)
