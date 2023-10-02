import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const EscrowTimeline = () => {
  return (
    <VerticalTimeline>
      {/* Step 1: Create an Account */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Step 1"
      >
        <h3 className="vertical-timeline-element-title">Create an Account</h3>
        <p>Begin by registering for an account on our platform. Provide your details and set up payment preferences.</p>
      </VerticalTimelineElement>

      {/* Step 2: Upload Funds to the Account */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Step 2"
      >
        <h3 className="vertical-timeline-element-title">Upload Funds to the Account</h3>
        <p>Deposit funds into your escrow account using your preferred payment method. Funds are securely held until needed.</p>
      </VerticalTimelineElement>

        {/* Step 3: Initiate a Transaction */}
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Step 3"
        >
        <h3 className="vertical-timeline-element-title">Initiate a Transaction</h3>
        <p>Initiate a transaction by providing the details of the transaction and the counterparty.</p>
        </VerticalTimelineElement>

        {/* Step 4: Confirm the Transaction Details */}
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Step 4"
        >
        <h3 className="vertical-timeline-element-title">Confirm the Transaction Details</h3>
        <p>Review the transaction details and confirm the transaction.</p>
        </VerticalTimelineElement>

        {/* Step 5: Approve the Transaction */}
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Step 5"
        >
        <h3 className="vertical-timeline-element-title">Approve the Transaction</h3>
        <p>If there are no problems with the service executions, the sender authorizes for the release of the funds.
          if there are any problems, the sender can raise a dispute. The funds are held until the dispute is resolved.
        </p>
        </VerticalTimelineElement>

        {/* Step 6: Receive the Funds */}
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Step 6"
        >
        <h3 className="vertical-timeline-element-title">Receive the Funds</h3>
        <p>Receive the funds into your account.</p>
        </VerticalTimelineElement>


    </VerticalTimeline>
  );
};

export default EscrowTimeline;
