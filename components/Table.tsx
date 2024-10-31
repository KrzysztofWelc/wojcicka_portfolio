export default function Table() {
  return (
    <table>
      <caption className='h3 text-left'>Features roadmap</caption>
      <tbody className='text-xl'>
        <tr>
          <th></th>
          <th>Feature name</th>
          <th>Description</th>
          <th>Research supporting it</th>
        </tr>
        <tr>
          <td>P1: Must-have</td>
          <td>SOS Button</td>
          <td>
            Prominent, easily accessible SOS button for immediate emergency
            alerts.
          </td>
          <td>Qualitative interviews</td>
        </tr>
        <tr>
          <td></td>
          <td>Real-Time Location Sharing</td>
          <td>
            Continuous GPS tracking to share the user’s location with designated
            contacts.
          </td>
          <td>Qualitative interviews</td>
        </tr>
        <tr>
          <td></td>
          <td>Silent Alert Mode</td>
          <td>
            Feature for discreetly sending alerts without drawing attention.
          </td>
          <td>Qualitative interviews</td>
        </tr>
        <tr>
          <td></td>
          <td>Quick Access</td>
          <td>Ensure key features are accessible within one or two taps</td>
          <td>Qualitative interviews, Literature review</td>
        </tr>
        <tr>
          <td></td>
          <td>Intuitive design</td>
          <td>
            Design an intuitive interface with large, easily tappable icons.
          </td>
          <td>Qualitative interviews, Literature review</td>
        </tr>
        <tr>
          <td>P2: Nice to have</td>
          <td>Heart Rate Monitoring</td>
          <td>Heart rate sensor to detect stress levels.</td>
          <td>Literature review</td>
        </tr>
        <tr>
          <td></td>
          <td>Stress Detection</td>
          <td>
            Trigger alerts or safety protocols if abnormal stress levels are
            detected.
          </td>
          <td>Literature review</td>
        </tr>
        <tr>
          <td></td>
          <td>Activity Monitoring</td>
          <td>
            Track and analyze movement patterns to detect unusual behavior.
          </td>
          <td>Literature review</td>
        </tr>
        <tr>
          <td>P3: Surprising and delightful</td>
          <td>Proactive Alerts</td>
          <td>
            Send automatic alerts if the user’s vitals indicate severe distress.
          </td>
          <td>Qualitative interviews, Literature review</td>
        </tr>
        <tr>
          <td></td>
          <td>Fall detection</td>
          <td>
            Implement fall detection to automatically send alerts if a fall is
            detected.
          </td>
          <td>Literature review</td>
        </tr>
        <tr>
          <td>P4: Can come later</td>
          <td>Incident Recording</td>
          <td>Enable discreet audio or video recording during emergencies.</td>
          <td>Qualitative interviews</td>
        </tr>
      </tbody>
    </table>
  );
}
