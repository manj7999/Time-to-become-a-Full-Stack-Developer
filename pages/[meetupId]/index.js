import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetails() {
  return (
    <MeetupDetails
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
}

export async function getStaticProps() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meerupId;
    console.log(meetupId);

    return {
      props: {
        meetupData: {
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
            id: meetupId,
            title: 'First Meetup',
            address: 'Some Strret 5, Some City',
            description: 'This is a first meetup'
        },
      },
    };
};

export default MeetupDetails;
