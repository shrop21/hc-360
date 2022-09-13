import '../App.css';
import { Tile } from '../components/tile';

function onSeeMoreClick() {
  return;
}

function AppStore() {
  return (
    <div className='app'>
      <h2>Installed Apps</h2>
      <div className='tile-container'>
        <Tile
          name="Medication Manager"
          description="See crucial drug-to-drug interaction warnings about how your meds might conflict, as well as easily import your meds and prescriptions."
          icon="https://www.svgrepo.com/show/6739/pills.svg" />
        <Tile
          name="In + Out: Breathing"
          description="A breathing app that helps you fights anxiety through exercises. Audio cues guide the rhythm of your breath as you breathe in and out."
          icon="https://www.svgrepo.com/show/32602/lungs.svg" />
      </div>
      <h2>Suggested Apps</h2>
      <div className='tile-container'>
        <Tile
          name="MedicationManager"
          description="Analyzes the medications you are taking and provides cost saving tips, potential conflict in medications, recalls and better food choices."
          icon="https://www.svgrepo.com/show/6739/pills.svg"
          onSeeMoreClick={onSeeMoreClick}
          openApp="Open App"
        />
        <Tile
          name="BoostThyroid"
          description="Manage your health with BOOST Thyroid. Fewer flare-ups and fewer sick days. You can track over 20 symptoms related to your body, mind, lifestyle, thyroid medications, and supplements."
          icon="https://www.svgrepo.com/show/41888/notepad.svg"
          onSeeMoreClick={onSeeMoreClick}
          openApp="Open App"
        />
        <Tile
          name="Lipid Manager"
          description="The ACC Lipid Manager app (formerly LDL-C Manager) provides 4-tools-in-1 to help clinicians manage a patient's triglycerides and LDL-C from therapy initiation through treatment calibration with the goal of lowering ASCVD risk."
          icon="https://www.svgrepo.com/show/80409/liver.svg"
          onSeeMoreClick={onSeeMoreClick}
          openApp="Open App"
        />
        <Tile
          name="Cardiogram"
          description="Transforms your everyday wearables into scientifically-validated heart monitors. And your smartphone into your heart's personal interpreter. With this powerful duo, you'll discover what your heart's patterns reveal about your cardiovascular health and receive personalized suggestions for taking positive action."
          icon="https://www.svgrepo.com/show/31141/cardiogram.svg"
          onSeeMoreClick={onSeeMoreClick}
          openApp="Open App"
        />
        <Tile
          name="SmartGym"
          description="Smart Gym will automatically track your workouts at the gym. Every rep, set and exercise is logged and presented to you on their mobile app. Their technology will provide real time feedback to help improve your routine."
          icon="https://www.svgrepo.com/show/23349/arm.svg"
          onSeeMoreClick={onSeeMoreClick}
          openApp="Open App"
        />
        <Tile
          name="PodPosture"
          description="Improve your posture with any wireless headphones! PodPosture uses the signal strength from your headphones to detect bad posture and beeps when your posture is poor to reduce bad posture."
          icon="https://www.svgrepo.com/show/135418/ear.svg"
          onSeeMoreClick={onSeeMoreClick}
          openApp="Open App"
        />
        <Tile
          name="MyFitnessPal"
          description="MyFitnessPal is one of the best weight loss apps and fitness apps, helping nearly 1 million members reach their nutrition and fitness goals every year. Members use it as a calories tracker and calorie counter to log their foods, and take advantage of the app’s food database that contains over 14 million foods."
          icon="https://cdn1.iconfinder.com/data/icons/social-hand-drawn-icons/57/social_62-1024.png"
          onSeeMoreClick={onSeeMoreClick}
          openApp="Open App"
        />
        <Tile
          name="MyPollenForecast"
          description="The My Pollen Forecast app is designed to make keeping track of seasonal allergy symptoms easy with its built-in diary system. Through the real-time tracking software, the app allows users to remain updated on allergens and pollen counts in their local area."
          icon="https://www.svgrepo.com/show/123082/flower.svg"
          onSeeMoreClick={onSeeMoreClick}
          openApp="Open App"
        />
        <Tile
          name="SkinAnalyst"
          description="This AI-powered algorithm backed app will analyze your profile and recommend beauty products based on your skin conditions."
          icon="https://www.svgrepo.com/show/100640/thin.svg"
          onSeeMoreClick={onSeeMoreClick}
          openApp="Open App"
        />
        <Tile
          name="MoodTracker"
          description="The mood tracker address everything from stress and low moods to symptoms of bipolar disorders and PTSD. This is recommended by mental health experts."
          icon="https://www.svgrepo.com/show/118948/brain.svg"
          onSeeMoreClick={onSeeMoreClick}
          openApp="Open App"
        />








      </div>
    </div>
  );
}

export default AppStore;
