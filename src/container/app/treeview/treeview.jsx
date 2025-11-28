import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

const Treeview = () => {
	return (
		<Fragment>
			<Row>
				<Col xl={12}>
					<Card >
						<Card.Header className=" p-4 pb-0">
							<h3 className="card-title mb-0">Basic Treeview</h3>
						</Card.Header>
						<Card.Body className="card-body">
							<div id="tree" className="lh-base fw-semibold fs-16">
								<Box sx={{ minHeight: 352, minWidth: 250 }}>
									<SimpleTreeView defaultExpandedItems={['grid']}>
										<TreeItem itemId="grid" label="TECH">
											<TreeItem itemId="grid-community" label="Company Maintenance" />
											<TreeItem itemId="grid-pro" label="Employees" />
											<TreeItem itemId="grid-premium" label="Human Resources" />
										</TreeItem>
										<TreeItem itemId="pickers" label="XRP">
											<TreeItem itemId="pickers-community" label="Company Maintenance" />
											<TreeItem itemId="pickers-pro" label="Employee-1" />
										</TreeItem>
										<TreeItem itemId="charts" label="TECH-2">
											<TreeItem itemId="charts-community" label="Employee-2" />
										</TreeItem>
										<TreeItem itemId="tree-view" label="TECH-3">
											<TreeItem itemId="tree-view-community" label="Human Resources" />
										</TreeItem>
									</SimpleTreeView>
								</Box>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Treeview;
