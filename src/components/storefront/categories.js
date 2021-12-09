import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { connect } from 'react-redux';

function Categories(props) {
  return (
    <div className="Categories">
      <Grid sx={{ margin: '50px 0px 0px 0px',}} justifyContent="center" container spacing={1}>
        {props.categories.categoryList.map((category, idx) => {
          return (
            <Grid key={idx} item>
              <Card>
                <Button onClick={() => {
                  props.changeCategory(category.name);
                }}>{category.displayName}</Button>
              </Card>
            </Grid >
          )
        })}
      </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = dispatch => ({
  changeCategory: (name) => dispatch({type: 'UPDATE_ACTIVE_CATEGORY', payload: name})
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
